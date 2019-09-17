const express = require('express');
const { createServer } = require('http');
const socket = require('./socket');

const app = express();
const server = createServer(app);
const bodyParser = require("body-parser");
var abbbgg = '';
//const express = require("express");
//const app = express();
app.use('/', express.static(`${process.cwd()}/../client`));
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
  abbbgg = username;
});

console.log('xxxxxxxxxxxxxxxxxxxxx',abbbgg);

module.exports.variableName = abbbgg;

module.exports.run = (config) => {
  server.listen(config.PORT);
  socket(server);
  console.log(`Server is listening at :${config.PORT}`);
};
