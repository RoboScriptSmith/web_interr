const fs = require('fs');

// Data to be written
const data = 'This is some text content to write to the file asynchronously.';

// File path
const filePath = 'example_async.txt';

// Write data to the file asynchronously
fs.writeFile(filePath, data, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file asynchronously:', err);
    return;
  }
  console.log('File written successfully asynchronously!');
});
