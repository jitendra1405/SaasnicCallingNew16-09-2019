const config = require('../config.json');
const server = require('./lib/haiku');

config.PORT = process.env.PORT || config.PORT;

server.run(config);

