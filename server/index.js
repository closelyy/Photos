const express = require('express');
const db = require('./../database.js');

const app = express();

app.use(express.urlencoded(({ extended: true })));
app.use(express.static('dist'));

const PORT = 3000;

app.get('/', (req, res) => {
  res.end();
});

app.get('/photos/', (req, res) => {
  // eslint-disable-next-line consistent-return
  db.query('SELECT * FROM photos', (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
