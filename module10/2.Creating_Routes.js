const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.post('/submit', (req, res) => {
    res.send('Form Submitted');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
