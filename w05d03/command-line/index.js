const pg = require('pg');

const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // collection of clients (5); managed

const config = {
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

const client = new Client(config);

client.connect();

// console.log(process.argv);
const verb = process.argv[2];
// console.log(verb);
const id = process.argv[3];

switch(verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains ORDER BY id;')
      .then((results) => {
        console.log(results.rows);
        client.end();
      });
    break;

  case 'read':
    // client.query(`SELECT * FROM movie_villains WHERE id = ${id}`)
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newVillainName = process.argv[4];
    const updateQuery = 'UPDATE movie_villains SET villain = $1 WHERE id = $2;';
    client.query(updateQuery, [newVillainName, id])
      .then(() => {
        console.log('villain has been updated successfully');
        client.end();
      });
    break;

  case 'add':
    const newVillain = process.argv[3];
    const newMovie = process.argv[4];
    const insertQuery = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';

    client.query(insertQuery, [newVillain, newMovie])
      .then(() => {
        console.log(`Disney+ is creating a solo series for ${newVillain}`);
        client.end();
      });
    break;

  case 'delete':
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain has been vanquished');
        client.end();
      });
    break;

  default:
    console.log('please provide a BREAD verb');
    client.end();
}
