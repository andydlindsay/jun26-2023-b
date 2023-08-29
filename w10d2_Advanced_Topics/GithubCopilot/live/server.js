// express app
var express = require('express');
var app = express();

const daysUntilChristmas = require('./library.js');

app.get('/', function(req, res) {
    res.send('Hello World!');
});

// route to show the number of days until Christmas
app.get('/days-until-christmas', function(req, res) {
    res.send('days until Christmas: ' + daysUntilChristmas());
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
