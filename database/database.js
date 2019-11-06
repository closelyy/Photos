const mysql = require('mysql');
const {
  host, user, password, database,
} = require('./config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testClose',
  password: 'testpass',
  database: 'closely',
});

module.exports = connection;

connection.connect();
