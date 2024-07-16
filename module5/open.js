const fs = require('fs');

// Path to the file
const filePath = 'example.txt';

// Open the file for reading
fs.open(filePath, 'r', (err, fd) => {
  if (err) {
    console.error('Error opening file:', err);
    return;
  }

  console.log('File opened successfully. File descriptor:', fd);

  // Optionally, you can read from the file using the file descriptor
  const buffer = Buffer.alloc(1024); // Allocate a buffer to read the file contents into

  fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
    if (err) {
      console.error('Error reading file:', err);
      fs.close(fd, (err) => {
        if (err) {
          console.error('Error closing file:', err);
        }
      });
      return;
    }

    console.log('File content read:', buffer.toString('utf8', 0, bytesRead));

    // Close the file descriptor
    fs.close(fd, (err) => {
      if (err) {
        console.error('Error closing file:', err);
      } else {
        console.log('File closed successfully.');
      }
    });
  });
});
