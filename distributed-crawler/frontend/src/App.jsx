import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [url, setUrl] = useState('https://example.com');
  const [depth, setDepth] = useState(1);
  const [status, setStatus] = useState('Ready to crawl');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const submitCrawl = async () => {
    if (!url) return setError('Please provide a start URL');
    setError('');
    setStatus('Queueing crawl job...');
    setIsLoading(true);

    try {
      const response = await axios.post('/api/crawl', { startUrl: url, depth });
      setResult(response.data);
      setStatus('Job queued successfully. Worker will process the crawl.');
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      setStatus('Failed to queue job');
    } finally {
      setIsLoading(false);
    }
  };

  const performSearch = async () => {
    if (!query) return setError('Please enter a search query');
    setError('');
    setStatus('Searching...');
    setIsLoading(true);

    try {
      const response = await axios.get(`/api/search?q=${encodeURIComponent(query)}`);
      setSearchResults(response.data.hits || []);
      setStatus(`Found ${response.data.hits.length} results`);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
      setStatus('Search failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-shell">
      <header>
        <h1>Distributed Crawler and Search</h1>
        <p>Submit crawl jobs, index pages, and search the collected content.</p>
      </header>

      <section className="card">
        <h2>Crawl Job</h2>
        <label>
          Start URL
          <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://example.com" />
        </label>
        <label>
          Depth
          <input type="number" value={depth} min="0" onChange={(e) => setDepth(Number(e.target.value))} />
        </label>
        <button onClick={submitCrawl} disabled={isLoading}>Queue Crawl</button>
      </section>

      <section className="card">
        <h2>Search Index</h2>
        <label>
          Keyword
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter search term" />
        </label>
        <button onClick={performSearch} disabled={isLoading}>Search</button>
      </section>

      <section className="card status-card">
        <h2>Status</h2>
        <p>{status}</p>
        {error && <p className="error">{error}</p>}
      </section>

      <section className="card result-card">
        <h2>Crawl Response</h2>
        <pre>{result ? JSON.stringify(result, null, 2) : 'No result yet'}</pre>
      </section>

      <section className="card result-card">
        <h2>Search Results</h2>
        {searchResults.length === 0 ? (
          <p>No search results yet.</p>
        ) : (
          <ul>
            {searchResults.map((item) => (
              <li key={item.url}>
                <a href={item.url} target="_blank" rel="noreferrer">{item.title || item.url}</a>
                <div className="score">Score: {item.score.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
