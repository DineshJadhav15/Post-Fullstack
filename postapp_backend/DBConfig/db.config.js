const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dinesh.123",
  database: "new_post",
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log("DB Connection succeded !!");
  } else {
    console.log(err);
  }
});

module.exports = mysqlConnection;
