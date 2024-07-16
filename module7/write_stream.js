const fs = require('fs');

// Create a writable stream to a file
const writableStream = fs.createWriteStream('/config/workspace/module7/example.txt');

writableStream.write('Hello, World!\n');
writableStream.write('Writing some more data.\n');

writableStream.end('This is the end of the stream.');

writableStream.on('finish', () => {
    console.log('All data has been written to the file.');
});

writableStream.on('error', (err) => {
    console.error('An error occurred:', err.message);
});
