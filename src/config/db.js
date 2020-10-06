const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'mysql669.umbler.com',
  user: 'pilares',
  password: 'pilaresadmin',
  database: 'pilares',
  port: 41890,
  multipleStatements: true
});

db.connect((err) => {
  if(err) throw err
  console.log("Database connected!");
});

module.exports = db;