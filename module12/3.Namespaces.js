const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!\n');
  });
  
const io = socketIo(server);
const chatNamespace = io.of('/chat');
const newsNamespace = io.of('/news');

chatNamespace.on('connection', (socket) => {
    console.log('User connected to chat namespace');
});

newsNamespace.on('connection', (socket) => {
    console.log('User connected to news namespace');
});
