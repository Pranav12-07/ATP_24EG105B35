# Distributed Web Crawler and Search Indexing System

This project implements a distributed web crawler with worker task distribution, content extraction, inverted indexing, search API, and Docker deployment.

## Components

- `api/` - Express API server for submitting crawl jobs and searching indexed content
- `worker/` - crawler worker that fetches pages, extracts text, and publishes indexing tasks
- `crawler/` - shared crawling and indexing logic
- `docker-compose.yml` - orchestrates API, worker, RabbitMQ, Redis, PostgreSQL, and Elasticsearch
- `nginx/` - optional reverse proxy for production

## Features

- Distributed crawling using RabbitMQ task queue
- Redis URL deduplication and caching
- PostgreSQL persistence for crawled pages and inverted index
- Elasticsearch full-text search indexing and ranking
- REST API for crawl submission and search
- Docker Compose for local development and deployment

## Quick start

1. Build and start everything:

   ```bash
   cd d:/single/distributed-crawler
   docker compose up --build
   ```
   Then visit the frontend at `http://localhost:3000`.
2. Open the API docs

   - Crawl submit: `http://localhost:4000/api/crawl`
   - Search: `http://localhost:4000/api/search?q=keyword`

3. Submit a crawl job:

   ```bash
   curl -X POST http://localhost:4000/api/crawl \
     -H 'Content-Type: application/json' \
     -d '{"startUrl":"https://example.com","depth":1}'
   ```

   The API enqueues the crawl job to RabbitMQ. Worker containers process jobs, fetch pages, save metadata to PostgreSQL, and index content in Elasticsearch.

4. Search indexed content:

   ```bash
   curl "http://localhost:4000/api/search?q=example"
   ```

## Notes

- Redis is used for URL deduplication and caching page fetches.
- RabbitMQ distributes crawl jobs to worker instances.
- Elasticsearch indexes page text for search ranking.
- PostgreSQL stores page metadata and inverted index data.
