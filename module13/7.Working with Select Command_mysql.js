const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mydb'
});

connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    console.log('Users:', results);
});
