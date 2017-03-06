//necessary to setup the server
var express = require('express');
var app = express();

var randomStuff = require('./lyrics');
//*new
app.use(express.static(__dirname + '/public'));
// respond with "Hello World!" on the homepage

//*new git request will match in server
//can be called whatever we want, but will pull from lyrics
//sends entire object

app.get('/lyrics', function(req, res){
  res.send(randomStuff);

});

app.get('/', function (req, res) {

res.send('Hello World!');

});

app.get('/randomLyric', function(req,res){
  console.log(randomStuff.randomStuff[Math.floor(Math.random() * randomStuff.randomStuff.length)]);
  //display
  res.send(randomStuff.randomStuff[Math.floor(Math.random() * randomStuff.randomStuff.length)]);
  //why is there a different console log compared to what's poted
});


var myInfo = {
  name:"Eric",
  age:26,
  favFood: "Jaz",
  favMusic: "Jazz Burger"
};

app.get('/myInfo', function(req, res){

  res.send(myInfo);
});

var list = [
{name: "Jazz", price:0.99},
{name: "Humus", price:9999.00},
{name: "Chicken", price:2.00},
];

app.get('/thingsToBuy', function(req, res){

  res.send(list);
});




var server = app.listen(8080, function () {

var port = server.address().port;

console.log('Example app listening at http://localhost:%s', port);
});
