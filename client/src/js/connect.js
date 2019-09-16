var mysql = require('mysql');
  var connectDB = {};

  connectDB.connection = mysql.createConnection({
    //db params
  });

  connectDB.connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connectDB.connection.threadId);
  });

module.exports = connectDB;
