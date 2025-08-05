import './App.css';
import React, { useState } from 'react';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import { Log } from './utils/logger'; 


Log("frontend", "info", "component", "App component mounted");
Log("frontend", "error", "hook", "useEffect failed to load URLs");


function App() {
  const [urls, setUrls] = useState([]);

  const handleNewShortUrl = (newUrl) => {
    setUrls((prev) => [newUrl, ...prev]);
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlForm onNewShortUrl={handleNewShortUrl} />
      <UrlList urls={urls} />
    </div>
  );
}

export default App;

