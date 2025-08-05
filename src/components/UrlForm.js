import { useState } from 'react';
import { shortenUrl } from '../utils/api';
import { logInfo, logError } from '../utils/logger';

export default function UrlForm({ onNewShortUrl }) {
  const [url, setUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await shortenUrl(url, customCode, validity);
      logInfo('Short URL created', response);
      onNewShortUrl(response);
      setUrl('');
      setCustomCode('');
      setValidity('');
    } catch (err) {
      logError('Failed to shorten URL', err);
      alert('Failed to shorten URL: ' + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        required
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom code (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
      />
      <input
        type="number"
        placeholder="Validity (mins)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
}
