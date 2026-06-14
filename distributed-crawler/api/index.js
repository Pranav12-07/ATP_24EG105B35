const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const amqp = require('amqplib');
const { Page, InvertedIndex, sequelize } = require('../crawler/models');
const { Client } = require('@elastic/elasticsearch');
const redis = require('redis');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const elastic = new Client({ node: process.env.ELASTIC_URL });
const redisClient = redis.createClient({ url: process.env.REDIS_URL });
const queueName = 'crawl_jobs';
let amqpChannel = null;

async function initDb() {
  await sequelize.authenticate();
  await sequelize.sync();
  await elastic.indices.create({ index: 'pages' }, { ignore: [400] });
}

async function initQueue() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName, { durable: true });
  amqpChannel = channel;
}

app.get('/health', (req, res) => res.json({ status: 'healthy' }));

app.post('/api/crawl', async (req, res) => {
  const { startUrl, depth = 1 } = req.body;
  if (!startUrl) return res.status(400).json({ error: 'startUrl is required' });
  if (!amqpChannel) return res.status(503).json({ error: 'Task queue not ready' });

  try {
    const payload = { startUrl, depth };
    amqpChannel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)), { persistent: true });
    return res.json({ success: true, message: 'Job queued', job: payload });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

app.get('/api/search', async (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: 'q parameter is required' });

  try {
    const response = await elastic.search({
      index: 'pages',
      body: {
        query: {
          multi_match: {
            query: q,
            fields: ['title^2', 'content']
          }
        }
      }
    });

    const hits = response.hits.hits.map(hit => ({
      url: hit._source.url,
      title: hit._source.title,
      score: hit._score
    }));

    return res.json({ query: q, hits });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 4000, async () => {
  await initDb();
  await initQueue();
  await redisClient.connect().catch(console.error);
  console.log(`API server running on port ${process.env.PORT || 4000}`);
});
