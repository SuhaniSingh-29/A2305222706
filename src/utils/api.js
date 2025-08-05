let inMemoryDatabase = [];

export async function shortenUrl(originalUrl, customCode, validity = 30) {
  await delay(500); // Simulate network latency

  // Validate custom code
  if (customCode) {
    const exists = inMemoryDatabase.find((entry) => entry.code === customCode);
    if (exists) throw new Error('Custom code already exists');
  }

  const code = customCode || generateRandomCode();
  const shortUrl = `https://short.ly/${code}`;
  const newEntry = {
    originalUrl,
    shortUrl,
    code,
    validity: parseInt(validity),
    createdAt: new Date().toISOString(),
  };

  inMemoryDatabase.push(newEntry);
  return newEntry;
}

function generateRandomCode() {
  return Math.random().toString(36).substring(2, 8);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
