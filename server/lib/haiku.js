const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');

const app = express();
const server = createServer(app);

app.use('/', express.static(`${process.cwd()}/../client`));



var abcd;

const bodyParser = require("body-parser");
//const express = require("express");
//const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(`POST request: username is ${username} and password is ${password}`);
  res.end(`You are now logged in Mr(s) ${username}`);
  console.log('username is the ',username);
  abcd = username;
  console.log('abcd value',abcd);
});

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





module.exports.run = (config) => {
  server.listen(config.PORT);
  socket(server);
  console.log(`Server is listening at :${config.PORT}`);
};
module.exports = () => {
  
  return `${someVar}`;
};
