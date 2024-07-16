const fs = require('fs');

// Path to the file
const filePath = 'example.txt';

// Data to append
const dataToAppend = '\nThis is additional text appended to the file.';

// Append data to the file asynchronously
fs.appendFile(filePath, dataToAppend, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file asynchronously:', err);
    return;
  }
  console.log('Data appended successfully asynchronously!');
});
