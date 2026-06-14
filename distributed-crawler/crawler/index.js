const axios = require('axios');
const cheerio = require('cheerio');
const { Page, InvertedIndex } = require('./models');
const redis = require('redis');

const stopWords = new Set(['the','and','a','to','of','in','is','it','you','that','he','was','for','on','are','with','as','I','his','they','be','at','one','have','this','from','or','had','by','hot','word','but','what','some','we','can','out','other','were','all','there','when','up','use','your','how','said','an','each','she']);

const redisClient = redis.createClient({ url: process.env.REDIS_URL });
redisClient.connect().catch(err => console.error('Redis connect error', err));

function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter(w => !stopWords.has(w));
}

async function fetchPage(url) {
  const cached = await redisClient.get(`page:${url}`);
  if (cached) {
    return JSON.parse(cached);
  }

  const response = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'DistributedCrawler/1.0' } });
  const html = response.data;
  const $ = cheerio.load(html);
  const title = $('title').text() || url;
  const body = $('body').text() || '';
  const text = `${title}\n${body}`;

  const page = { url, title, content: text, html, crawledAt: new Date().toISOString() };
  await redisClient.setEx(`page:${url}`, 3600, JSON.stringify(page));
  return page;
}

function extractLinks(url, html) {
  const $ = cheerio.load(html);
  const links = new Set();
  $('a[href]').each((_, el) => {
    let href = $(el).attr('href');
    if (!href) return;
    href = href.split('#')[0].trim();
    if (!href || href.startsWith('mailto:') || href.startsWith('javascript:') || href.startsWith('tel:')) return;
    try {
      const abs = new URL(href, url);
      if (abs.protocol.startsWith('http')) {
        links.add(abs.href);
      }
    } catch (e) {
      // ignore invalid URL
    }
  });
  return Array.from(links);
}

function rankTerms(terms) {
  const score = {};
  terms.forEach(term => {
    score[term] = (score[term] || 0) + 1;
  });
  return score;
}

async function updateIndex(url, content) {
  const terms = tokenize(content);
  const counts = rankTerms(terms);
  const unique = Object.keys(counts);

  for (const term of unique) {
    const entry = await InvertedIndex.findByPk(term);
    const urls = entry ? new Set(entry.urls) : new Set();
    urls.add(url);
    await InvertedIndex.upsert({ term, urls: Array.from(urls) });
  }
}

async function savePage(page) {
  await Page.upsert(page);
}

async function crawlUrl(url, visited) {
  if (visited.has(url)) return null;
  visited.add(url);
  const page = await fetchPage(url);
  const links = extractLinks(url, page.html);
  await savePage(page);
  await updateIndex(url, page.content);
  return { url, title: page.title, links };
}

async function crawl(startUrl, depth) {
  const visited = new Set();
  const results = [];
  let queue = [startUrl];

  for (let level = 0; level <= depth; level++) {
    const nextQueue = [];
    for (const url of queue) {
      const result = await crawlUrl(url, visited);
      if (!result) continue;
      results.push(result);
      if (level < depth) {
        result.links.forEach(link => {
          if (!visited.has(link)) nextQueue.push(link);
        });
      }
    }
    queue = nextQueue;
  }

  return results;
}

module.exports = { crawl, extractLinks, fetchPage, updateIndex, tokenize, redisClient };
