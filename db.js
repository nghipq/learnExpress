var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapters = new FileSync('db.json');
db = low(adapters);

db.defaults({
  users: [],
  products: [], 
  sessions: [],
})
  .write();

module.exports = db;