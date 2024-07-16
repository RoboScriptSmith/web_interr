const fs = require('fs');

// Create readable and writable streams
const readableStream = fs.createReadStream('/config/workspace/module7/example.txt');
const writableStream = fs.createWriteStream('/config/workspace/module7/output.txt');

// Pipe data from the readable stream to the writable stream
readableStream.pipe(writableStream);

writableStream.on('finish', () => {
    console.log('All data has been piped and written to the file.');
});

writableStream.on('error', (err) => {
    console.error('An error occurred:', err.message);
});
