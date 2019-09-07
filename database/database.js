const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: 'password',
  database: 'closely',
});

module.exports = connection;

connection.connect();
