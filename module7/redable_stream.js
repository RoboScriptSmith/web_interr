const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('/config/workspace/module7/example.txt', { encoding: 'utf8' });

readableStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
    console.log(chunk);
});

readableStream.on('end', () => {
    console.log('There is no more data to read.');
});

readableStream.on('error', (err) => {
    console.error('An error occurred:', err.message);
});
