const amqp = require('amqplib');
const { crawl } = require('../crawler/index');
const { Page, InvertedIndex, sequelize } = require('../crawler/models');
const { Client } = require('@elastic/elasticsearch');
const redis = require('redis');

require('dotenv').config();

const rabbitUrl = process.env.RABBITMQ_URL;
const elastic = new Client({ node: process.env.ELASTIC_URL });
const redisClient = redis.createClient({ url: process.env.REDIS_URL });

async function init() {
  await redisClient.connect();
  await sequelize.authenticate();
}

async function indexPage(page) {
  await elastic.index({
    index: 'pages',
    document: {
      url: page.url,
      title: page.title,
      content: page.content,
      crawledAt: page.crawledAt
    }
  });
}

async function handleMessage(msg, channel) {
  const payload = JSON.parse(msg.content.toString());
  const { startUrl, depth = 1 } = payload;
  console.log('Processing crawl', startUrl, depth);
  try {
    const pages = await crawl(startUrl, depth);
    for (const page of pages) {
      await indexPage(page);
    }
    channel.ack(msg);
  } catch (err) {
    console.error('Worker error', err);
    channel.nack(msg, false, false);
  }
}

async function run() {
  await init();
  const conn = await amqp.connect(rabbitUrl);
  const ch = await conn.createChannel();
  await ch.assertQueue('crawl_jobs', { durable: true });
  ch.consume('crawl_jobs', msg => handleMessage(msg, ch), { noAck: false });
  console.log('Worker listening for crawl jobs');
}

run().catch(err => console.error('Worker failed', err));
