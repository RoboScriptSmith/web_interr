const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  });
  
const io = socketIo(server);



io.on('connection', (socket) => {
    socket.on('joinRoom', (room) => {
        socket.join(room);
        socket.to(room).emit('message', 'A new user has joined the room');
    });

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
    });
});
