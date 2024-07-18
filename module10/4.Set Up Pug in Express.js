const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
