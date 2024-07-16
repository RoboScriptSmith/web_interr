const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('data', (data) => {
    console.log('Received data:', data);
});

myEmitter.on('error', (err) => {
    console.error('Error:', err.message);
});

function processData(input) {
    if (input === 'error') {
        myEmitter.emit('error', new Error('Invalid data'));
    } else {
        myEmitter.emit('data', input);
    }
}

processData('hello'); // Emits 'data' event
processData('error'); // Emits 'error' event
