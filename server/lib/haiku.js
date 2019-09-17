const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');

const app = express();
const server = createServer(app);






var mysql = require('mysql'); 
var con = mysql.createConnection({ 
host : 'sql12.freemysqlhosting.net',
database : 'sql12304794',
user : 'sql12304794',
password : 'PLSEEGHnWv', 
}); 
con.connect(function(err) { 
if (err) throw err; 
con.query("SELECT UserName FROM user where email='parth@gmail.com' limit 1 ", function (err, result) { 
if (err) throw err; 
console.log(result); 
setValue(result);

}); 
}); 

function setValue(value) {
someVar = value[0].UserName;
console.log('nnnnnnnnnnnnnnnnnnnnnnn',someVar);
}


console.log('abovee the body vlaueeeeee varrrr');





module.exports = () => {
  
  return `${someVar}`;
};





