const fs = require('fs');

// Path to the file
const filePath = 'example.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file asynchronously:', err);
    return;
  }
  console.log('File contents read asynchronously:', data);
});
