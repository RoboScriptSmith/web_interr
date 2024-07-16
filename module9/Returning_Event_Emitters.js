const EventEmitter = require('events');

function createEmitter() {
    const emitter = new EventEmitter();
    setTimeout(() => {
        emitter.emit('timeout', 'Operation completed');
    }, 1000);
    return emitter;
}

const myEmitter = createEmitter();

myEmitter.on('timeout', (message) => {
    console.log(message);
});
