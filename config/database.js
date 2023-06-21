const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "containers-us-west-34.railway.app",
  user: "root",
  password: "XN0SsMG96kUjVNlSr3Tv",
  database: "railway",
  port: 7752,
});

module.exports = connection;
