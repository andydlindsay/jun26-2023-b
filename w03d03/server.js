const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

const users = {
  abc: {
    id: "abc",
    username: "alice",
    password: "1234",
  },
  def: {
    id: "def",
    username: "bob",
    password: "5678",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates req.body
app.use(cookieParser()); // creates req.cookies

// GET /login
app.get('/login', (req, res) => {
  res.render('login'); // views/login.ejs
});

// POST /login
app.post('/login', (req, res) => {
  // pull the data off the body object
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT give us a username or password
  if (!username || !password) {
    res.status(400);
    return res.send('you must provide a username and password');
  }

  // look up the user based on their username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // yay! we found our user!
      foundUser = user;
    }
  }

  // did we NOT find a user?
  if (!foundUser) {
    return res.status(400).send('no user with that username found');
  }

  // compare the passwords (do they NOT match)
  if (foundUser.password !== password) {
    return res.status(400).send('passwords do not match');
  }

  // happy path!!!
  // set a cookie
  res.cookie('userId', foundUser.id);

  // redirect the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the cookie value
  const userId = req.cookies.userId;

  // do they NOT have a cookie
  if (!userId) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // happy path! they have a cookie!
  // look up the user based on their cookie
  const user = users[userId];

  const templateVars = {
    user: user
  };

  // render the protected page
  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the userId cookie
  res.clearCookie('userId');

  // redirect to the login page
  res.redirect('/login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // pull the data off the body object
  const username = req.body.username;
  const password = req.body.password;

  // did they NOT give us a username or password
  if (!username || !password) {
    res.status(400);
    return res.send('you must provide a username and password');
  }

  // look up the user based on their username
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.username === username) {
      // yay! we found our user!
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('a user with that username already exists');
  }

  // happy path! the username is unique!

  // create a new user object
  const id = Math.random().toString(36).substring(2, 5);
  const newUser = {
    id: id,
    username: username,
    password: password
  };

  // update the users object
  users[id] = newUser;
  console.log(users);

  // redirect the user somewhere
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
