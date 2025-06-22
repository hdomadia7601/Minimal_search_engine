import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [summary, setSummary] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResults([]);
    setSummary('');

    try {
      const response = await fetch(`https://minimal-search-engine.onrender.com/search?query=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error('Search failed. Please try again later.');

      const data = await response.json();
      setSummary(data.summary);
      setResults(data.raw_results);
      setQuery('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white px-6 py-6 font-sans transition-all">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-2xl font-bold">QueryVerse</h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 -mt-1">Curate. Query. Connect. Know.</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-neutral-200 dark:bg-neutral-700 text-sm px-4 py-2 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-all"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        {/* Prompt + Search Box */}
        <div className="flex flex-col items-center">
          <p className="text-lg mb-4 text-center">What can I help you with?</p>

          <div className="flex max-w-2xl w-full gap-2 mb-6">
            <input
              type="text"
              className="flex-grow p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Type your query..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all"
            >
              Search
            </button>
          </div>
        </div>

        {/* Status & Results */}
        <div className="flex flex-col items-center">
          {loading && (
            <div className="w-full flex justify-center mt-4 animate-pulse text-blue-500 text-base">
              <span className="bg-blue-500/20 px-4 py-2 rounded-xl">Thinking...</span>
            </div>
          )}

          {error && <p className="mt-4 text-red-500">{error}</p>}

          {!loading && summary && (
            <div className="max-w-2xl mt-6 bg-neutral-200 dark:bg-neutral-800 p-6 rounded-2xl shadow-sm w-full">
              <h2 className="text-xl font-semibold mb-2">Here’s what I found:</h2>
              <p className="text-base leading-relaxed">{summary}</p>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="mt-6 max-w-2xl w-full">
              {results.map((result, index) => (
                <div key={index} className="mb-5 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold">{result.title}</h3>
                  <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-words">{result.url}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
