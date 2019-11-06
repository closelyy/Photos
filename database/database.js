const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testClose',
  password: 'testpass',
  database: 'closely',
});

module.exports = connection;

connection.connect();
