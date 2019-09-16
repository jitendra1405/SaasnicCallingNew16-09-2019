const config = require('../config.json');
const server = require('./lib/server');

config.PORT = process.env.PORT || config.PORT;

server.run(config);
var db = require('./connect');
var test_connection = db.connection.query('SELECT * FROM `test`', function (error, results, fields) {
  console.log(results);
});
