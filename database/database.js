const mysql = require('mysql');
const {
  host, user, password, database,
} = require('./config');

const connection = mysql.createConnection({
  host,
  user,
  password,
  database,
});

module.exports = connection;

connection.connect();
