const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Registering an error listener
myEmitter.on('error', (err) => {
    console.error('Error occurred:', err.message);
});

// Emitting an error
myEmitter.emit('error', new Error('Something went wrong'));
