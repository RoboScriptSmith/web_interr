const fs = require('fs');

// Path to the files
const asyncFilePath = 'example.txt';
const syncFilePath = 'example_sync.txt';

// Create a file named example.txt
fs.writeFile(asyncFilePath, 'This is some text content.', 'utf8', (err) => {
  if (err) {
    console.error('Error creating file asynchronously:', err);
    return;
  }
  console.log('File created successfully asynchronously.');

  // Delete the file asynchronously
  fs.unlink(asyncFilePath, (err) => {
    if (err) {
      console.error('Error deleting file asynchronously:', err);
      return;
    }
    console.log('File deleted successfully asynchronously!');

    // Create a file named example_sync.txt
    try {
      fs.writeFileSync(syncFilePath, 'This is some text content.', 'utf8');
      console.log('File created successfully synchronously.');

      // Delete the file synchronously
      fs.unlinkSync(syncFilePath);
      console.log('File deleted successfully synchronously!');
    } catch (err) {
      console.error('Error:', err);
    }
  });
});
