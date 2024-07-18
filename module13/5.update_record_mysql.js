const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

connection.query('UPDATE users SET age = ? WHERE name = ?', [30, 'Alice'], (err, results) => {
    if (err) throw err;
    console.log('Record updated:', results);
});
