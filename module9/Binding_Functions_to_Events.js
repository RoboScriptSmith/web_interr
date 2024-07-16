const EventEmitter = require('events');

const emitter = new EventEmitter();

function onData(data) {
    console.log(`Data received: ${data}`);
}

emitter.on('data', onData);

emitter.emit('data', 'Sample Data');

