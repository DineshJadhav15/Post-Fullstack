const express = require("express");
const cors = require("cors")
var app = express();
const body_parser = require("body-parser");
app.use(body_parser.json());
app.use(cors())

const crudRouter = require("./CRUD/crud.cntroller");
const { use } = require("./CRUD/crud.cntroller");
app.use("/crud", crudRouter);
app.listen(4000);





// var mysqlConnection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Dinesh.123",
//   database: "employeDB",
// });

// mysqlConnection.connect((err) => {
//   if (!err) {
//     console.log("DB Connection succeded !!");
//   } else {
//     console.log(err);
//   }
// });

// app.listen(port, () => {
//   console.log("Express server running on port", port);
// });

// //get all employees from DB
// app.get("/persons", (request, respone) => {
//   mysqlConnection.query("SELECT * FROM Persons ", (err, rows, field) => {
//     if (!err) {
//       console.log(rows);
//       respone.send(rows);
//     } else {
//       console.log(err);
//     }
//   });
// });

// //get specific  employe from DB
// app.get("/persons/:id", (request, respone) => {
//   mysqlConnection.query(
//     "SELECT * FROM Persons WHERE PersonID = ? ",
//     [request.params.id],
//     (err, rows, field) => {
//       if (!err) {
//         console.log(rows);
//         respone.send(rows);
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

// //DELETE specific  employe from DB
// app.delete("/persons/:id", (request, respone) => {
//   mysqlConnection.query(
//     "DELETE FROM Persons WHERE PersonID = ? ",
//     [request.params.id],
//     (err, rows, field) => {
//       if (!err) {
//         console.log(rows);
//         respone.send("Delete user successfully");
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });

// //POST specific  employe from DB
// app.post("/persons/:id", (request, respone) => {
//   mysqlConnection.query(
//     "DELETE FROM Persons WHERE PersonID = ? ",
//     [request.params.id],
//     (err, rows, field) => {
//       if (!err) {
//         console.log(rows);
//         respone.send("Delete user successfully");
//       } else {
//         console.log(err);
//       }
//     }
//   );
// });
