const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

connection.query('DELETE FROM users WHERE name = ?', ['Alice'], (err, results) => {
    if (err) throw err;
    console.log('Record deleted:', results);
});
