
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'testpass',
  database: 'testsql'
});

module.exports = connection;
