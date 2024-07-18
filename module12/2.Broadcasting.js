const http = require('http');
const socketIo = require('socket.io');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// Initialize Socket.IO with the HTTP server
const io = socketIo(server);

// Define the connection event
io.on('connection', (socket) => {
  console.log('a user connected');

  // Define a message event listener
  socket.on('message', (msg) => {
    console.log('message: ' + msg);
  });

  // Define a disconnect event listener
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
