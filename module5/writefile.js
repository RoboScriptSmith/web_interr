const fs = require('fs');

// Data to be written
const content = 'This is some text content to write to the file.';

// Asynchronous write
fs.writeFile('example.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing file asynchronously:', err);
    return;
  }
  console.log('File written successfully asynchronously!');

  // Synchronous write (done after asynchronous write completes)
  try {
    fs.writeFileSync('example_sync.txt', content, 'utf8');
    console.log('File written successfully synchronously!');
  } catch (err) {
    console.error('Error writing file synchronously:', err);
  }
});
