// Import the 'fs' module
const fs = require('fs');
// Path to the file
const filePath = 'example.txt';
// Write data to the file
fs.writeFile(filePath, 'Hello, Node.js!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully.');

    // Read data from the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading from file:', err);
            return;
        }
        console.log('File content:', data);
    });
});
