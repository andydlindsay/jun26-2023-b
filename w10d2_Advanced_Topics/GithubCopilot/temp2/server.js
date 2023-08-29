// express app
var express = require('express');
var app = express();
var server = require('http').createServer(app);

// middleware

// serve static files
app.use(express.static(__dirname + '/public'));

// route for how many days until Christmas?
app.get('/days-until-christmas', function(req, res) {
  var daysUntilChristmas = require('./library.js').daysUntilChristmas;
  res.send(daysUntilChristmas().toString());
});

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/index.html');
});

// start server
server.listen(3000, function () {
  console.log('Server listening at port %d', 3000);
});
