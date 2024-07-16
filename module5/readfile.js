const fs = require('fs');

// File path
const filePath = 'path/to/file.txt';

// Asynchronous Read
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file asynchronously:', err);
    return;
  }
  console.log('Asynchronous read file contents:', data);

  // Synchronous Read
  try {
    const syncData = fs.readFileSync(filePath, 'utf8');
    console.log('Synchronous read file contents:', syncData);
  } catch (syncErr) {
    console.error('Error reading file synchronously:', syncErr);
  }

  // Streaming Read
  const readStream = fs.createReadStream(filePath, 'utf8');
  
  readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
  });
  
  readStream.on('end', () => {
    console.log('Streaming read finished.');
  });
  
  readStream.on('error', (streamErr) => {
    console.error('Error reading file with stream:', streamErr);
  });
});
