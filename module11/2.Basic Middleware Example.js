const express = require('express');
const app = express();
const port = 3000;

// Middleware function to log request details
app.use((req, res, next) => {
    console.log(`Received ${req.method} request for ${req.url}`);
    next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
    res.send('Middleware example');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
