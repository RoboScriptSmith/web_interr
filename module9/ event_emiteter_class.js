const EventEmitter = require('events');


const emitter = new EventEmitter();

emitter.on('eventName', () => {
    console.log('Event triggered');
});

emitter.emit('eventName');
