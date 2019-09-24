const config = require('../config.json');
const server = require('./lib/user');

config.PORT = process.env.PORT || config.PORT;

server.run(config);

