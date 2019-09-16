const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');

const app = express();
const server = createServer(app);
var mysql = require('mysql');


app.use('/', express.static(`${process.cwd()}/../client`));
var db_config = {
    host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv'
};

var connection;

connection = mysql.createConnection(db_config);
app.get('/', function(request, response) {
    connection.query('SELECT * from user', function(err, rows, fields) {
        if (err) {
            console.log('error: ', err);
            throw err;
        }
	    
        response.send(['Hello World!!!! HOLA MUNDO!!!!', rows]);
    });
});





 
module.exports.run = (config) => {
  server.listen(config.PORT);
  socket(server);
  console.log(`Server is listening at :${config.PORT}`);
};
