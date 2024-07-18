const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  });
  
const io = socketIo(server);

io.on('connection', (socket) => {
    socket.on('error', (err) => {
        console.error('Error:', err);
    });

    socket.emit('error', 'Custom error message');
});
