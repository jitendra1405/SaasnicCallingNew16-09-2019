const adjs = [
  'autumn', 'hidden', 'bitter', 'misty', 'silent', 'empty', 'dry', 'dark',
  'summer', 'icy', 'delicate', 'quiet', 'white', 'cool', 'spring', 'winter',
  'patient', 'twilight', 'dawn', 'crimson', 'wispy', 'weathered', 'blue',
  'billowing', 'broken', 'cold', 'damp', 'falling', 'frosty', 'green',
  'long', 'late', 'lingering', 'bold', 'little', 'morning', 'muddy', 'old',
  'red', 'rough', 'still', 'small', 'sparkling', 'throbbing', 'shy',
  'wandering', 'withered', 'wild', 'black', 'young', 'holy', 'solitary',
  'fragrant', 'aged', 'snowy', 'proud', 'floral', 'restless', 'divine',
  'polished', 'ancient', 'purple', 'lively', 'nameless'
];

const nouns = [
  'waterfall', 'river', 'breeze', 'moon', 'rain', 'wind', 'sea', 'morning',
  'snow', 'lake', 'sunset', 'pine', 'shadow', 'leaf', 'dawn', 'glitter',
  'forest', 'hill', 'cloud', 'meadow', 'sun', 'glade', 'bird', 'brook',
  'butterfly', 'bush', 'dew', 'dust', 'field', 'fire', 'flower', 'firefly',
  'feather', 'grass', 'haze', 'mountain', 'night', 'pond', 'darkness',
  'snowflake', 'silence', 'sound', 'sky', 'shape', 'surf', 'thunder',
  'violet', 'water', 'wildflower', 'wave', 'water', 'resonance', 'sun',
  'wood', 'dream', 'cherry', 'tree', 'fog', 'frost', 'voice', 'paper',
  'frog', 'smoke', 'star'
];
var someVar = [];


var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set ejs as rendering engine
app.set('view engine', 'ejs');

// parse html forms
app.use(bodyParser.urlencoded({ extended : false }));

// render the ejs page
app.get('/', function (req, res) {
  res.render('index.ejs');
});

// when Add to Top button is clicked
app.post('/top', function (req, res) {
  console.log(req.body.todo + " is added to top of the list.");
  res.redirect('/');
});

// when Add to Bottom button is clicked
app.post('/bottom', function (req, res) {
  console.log(req.body.todo + " is added to bottom of the list.");
  res.redirect('/');
});


























var mysql = require('mysql');  
var con = mysql.createConnection({  
  host     : 'sql12.freemysqlhosting.net',
    database : 'sql12304794',
    user     : 'sql12304794',
    password : 'PLSEEGHnWv', 
});  
con.connect(function(err) {  
if (err) throw err;  
con.query("SELECT UserName FROM user where Email='parth@gmail.com' limit 1 ", function (err, result) {  
if (err) throw err;  
console.log(result);  
 setValue(result);
  
});  
});  

function setValue(value) {
  someVar = value[0].UserName;
  console.log('nnnnnnnnnnnnnnnnnnnnnnn',someVar);
}





module.exports = () => {
  
  const adj = adjs[Math.floor(Math.random() * adjs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const MIN = 1000;
  const MAX = 9999;
  const num = Math.floor(Math.random() * ((MAX + 1) - MIN)) + MIN;
  const abc = 'saasnic';
  
return `${someVar}`;
  
};
