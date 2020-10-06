const db = require("../../config/db");

module.exports = {
 find(id, cb) {
   return db.query('SELECT * FROM days WHERE id = ?', [id], cb);
 }
}