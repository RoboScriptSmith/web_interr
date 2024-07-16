const fs = require('fs');

// Path to the file
const filePath = 'example.txt';

// Delete the file asynchronously
fs.unlink(filePath, (err) => {
  if (err) {
    console.error('Error deleting file asynchronously:', err);
    return;
  }
  console.log('File deleted successfully asynchronously!');
});
