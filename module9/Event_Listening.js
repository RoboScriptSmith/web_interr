const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('data', (data) => {
    console.log(`Data event received: ${data}`);
});

emitter.once('onceEvent', () => {
    console.log('This event will be triggered only once');
});

emitter.emit('data', 'First data');
emitter.emit('onceEvent');
emitter.emit('onceEvent'); // This will not trigger the event again
