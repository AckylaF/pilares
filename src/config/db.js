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

// HEARTBEAT TO KEEP CONNECTION ALIVE
setInterval(() => {
  db.query('SELECT 1', (err) => {if (err) throw err});
}, 60000)


module.exports = db;