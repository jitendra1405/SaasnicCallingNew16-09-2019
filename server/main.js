const config = require('../config.json');
const server = require('./lib/server');

config.PORT = process.env.PORT || config.PORT;

server.run(config);
var mysql = require('mysql');  
var con = mysql.createConnection({  
  host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv', 
});  
module.exports = con;
