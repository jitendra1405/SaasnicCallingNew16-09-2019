const config = require('../config.json');
const server = require('./lib/server');

config.PORT = process.env.PORT || config.PORT;
console.log('ppppppppppppppppppppppppppppppppppppp');
server.run(config);
