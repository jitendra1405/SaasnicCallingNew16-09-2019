const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');

const app = express();
const server = createServer(app);
var mysql = require('mysql');
var connectDB = {};

app.use('/', express.static(`${process.cwd()}/../client`));


  connectDB.connection = mysql.createConnection({
    host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv', 
  });

  connectDB.connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connectDB.connection.threadId);
  });

module.exports = connectDB;

module.exports.run = (config) => {
  server.listen(config.PORT);
  socket(server);
  console.log(`Server is listening at :${config.PORT}`);
};
