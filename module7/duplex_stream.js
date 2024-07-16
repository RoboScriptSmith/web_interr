const { Duplex } = require('stream');

// Create a custom duplex stream
class EchoStream extends Duplex {
    constructor(options) {
        super(options);
    }

    // Implement the _read method to read data from the stream
    _read(size) {
        // No-op, the push will be handled in _write
    }

    // Implement the _write method to write data to the stream
    _write(chunk, encoding, callback) {
        // Echo back the received chunk
        this.push(chunk);
        callback();
    }

    // Implement the _final method to signify the end of the writable stream
    _final(callback) {
        // Signal the end of data to the readable side
        this.push(null);
        callback();
    }
}

// Create an instance of EchoStream
const echoStream = new EchoStream();

// Write data to the duplex stream
echoStream.write('Hello, ');
echoStream.write('Node.js ');
echoStream.write('Streams!\n');

// End the writable side of the stream
echoStream.end();

// Read data from the duplex stream
echoStream.on('data', (chunk) => {
    process.stdout.write(chunk);
});

echoStream.on('end', () => {
    console.log('Echo stream ended.');
});
