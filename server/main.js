const config = require('../config.json');
const server = require('./lib/server');

config.PORT = process.env.PORT || config.PORT;

server.run(config);

var test_connection = server.connection.query('SELECT * FROM `test`', function (error, results, fields) {
  console.log(results);
});
