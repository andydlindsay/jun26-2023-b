require('dotenv').config(); // populates process.env

const express = require('express');

const app = express();
const port = 54321;

const client = require('./database/connection');

// GET /villains
app.get('/villains', (req, res) => {
  client.query('SELECT * FROM movie_villains ORDER BY id;')
    .then((response) => {
      const villains = response.rows;
      res.json(villains);
    });
});

// GET /villains/:id
app.get('/villains/:id', (req, res) => {
  const villainId = req.params.id;
  client.query('SELECT * FROM movie_villains WHERE id = $1;', [villainId])
    .then((response) => {
      const villain = response.rows[0];
      res.json(villain);
    })
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
