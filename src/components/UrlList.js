import { useEffect, useState } from 'react';

export default function UrlList({ urls }) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const getRemainingTime = (createdAt, validity) => {
    const expiry = new Date(createdAt).getTime() + validity * 60000;
    const remaining = expiry - now;
    return remaining > 0
      ? `${Math.floor(remaining / 60000)} min(s) left`
      : 'Expired';
  };

  return (
    <div>
      <h3>Shortened URLs</h3>
      <ul>
        {urls.map((urlObj, index) => (
          <li key={index}>
            <a href={urlObj.shortUrl} target="_blank" rel="noreferrer">
              {urlObj.shortUrl}
            </a>{' '}
            → {urlObj.originalUrl} ({getRemainingTime(urlObj.createdAt, urlObj.validity)})
          </li>
        ))}
      </ul>
    </div>
  );
}
