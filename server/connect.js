var mysql = require('mysql');
  var connectDB = {};

  connectDB.connection = mysql.createConnection({
   host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv'
  });

  connectDB.connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connectDB.connection.threadId);
  });

module.exports = connectDB;
