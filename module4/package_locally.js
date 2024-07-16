// app.js

// Import the 'express' module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});