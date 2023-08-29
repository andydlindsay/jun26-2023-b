// express app to server static files and JSON
// Usage: node server.js

var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/data', function(req, res){
  res.json(require('./data.json'));
});

// CRUD routes for Notes
app.get('/notes', function(req, res){
  res.json(require('./notes.json'));
});

app.post('/notes', function(req, res){
  res.json(require('./notes.json'));
});

app.put('/notes', function(req, res){
  res.json(require('./notes.json'));
});

app.delete('/notes', function(req, res){
  res.json(require('./notes.json'));
});

// calculate the number of days between now and Christmas
app.get('/days', function(req, res){
  var now = new Date();
  var christmas = new Date(now.getFullYear(), 11, 25);
  if (now.getMonth() == 11 && now.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }
  var one_day = 1000 * 60 * 60 * 24;
  var days = Math.ceil((christmas.getTime() - now.getTime()) / (one_day));
  res.json({days: days});
});

app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
