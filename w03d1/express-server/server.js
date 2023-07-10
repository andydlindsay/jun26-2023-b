const express = require('express');
const port = 3001;

const app = express();
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use((req, res, next) => {
  console.log(`ROUTE: ${req.method} ${req.url}`);
  next();
});

// ROUTES
app.get('/', (req, res) => {
  const templateVars = {
    firstname: 'Anne'
  };
  res.render('home', templateVars);
});

app.get('/monkeyfuzz', (req, res) => {
  res.send('mf');
});

app.get('*', (req, res) => {
  res.send('404');
});

// START LISTENING

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
