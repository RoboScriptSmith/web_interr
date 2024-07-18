const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'abc',
    password: 'password',
   
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});
