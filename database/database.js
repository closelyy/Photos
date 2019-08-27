const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testing',
  password: 'testing12345',
  database: 'closely',
});

module.exports = connection;

connection.connect();
