// an express server that hosts a game of blackjack

// import the express module
const express = require('express');
const game = require('./game.js');

// middleware
const bodyParser = require('body-parser');
const session = require('express-session');

// morgan
const morgan = require('morgan');

// create an express app
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
