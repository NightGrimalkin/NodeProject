const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: 'a',      
    database: '' 
});


connection.connect((err) => {
    if (err) throw err;
});

module.exports = connection;

