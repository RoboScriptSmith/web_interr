const fs = require('fs');

// File path
const filePath = 'example.txt';

// Write initial data to the file
fs.writeFile(filePath, 'Initial content of the file.', 'utf8', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully.');

  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file asynchronously:', err);
      return;
    }
    console.log('File contents read asynchronously:', data);

    // Append data to the file asynchronously
    const dataToAppend = '\nThis is additional text appended to the file.';
    fs.appendFile(filePath, dataToAppend, 'utf8', (err) => {
      if (err) {
        console.error('Error appending to file asynchronously:', err);
        return;
      }
      console.log('Data appended successfully asynchronously!');

      // Read the file again to see the appended data
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file after appending:', err);
          return;
        }
        console.log('Updated file contents read asynchronously:', data);

        // Delete the file asynchronously
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file asynchronously:', err);
            return;
          }
          console.log('File deleted successfully asynchronously!');
        });
      });
    });
  });
});
