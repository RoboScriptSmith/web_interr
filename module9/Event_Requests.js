const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('request', (requestData, callback) => {
    console.log('Request received:', requestData);
    callback('Response data');
});

emitter.emit('request', 'Request data', (response) => {
    console.log('Callback response:', response);
});
