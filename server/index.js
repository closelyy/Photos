const express = require('express');
const db = require('./../database/database.js');

const app = express();

app.use(express.urlencoded(({ extended: true })));
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:1984');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const PORT = 3000;
const indexPath = `${__dirname}/../public/index.html`;

app.get('/businesses/:id', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/api/businesses/:id/photos', (req, res) => {
  const { id } = req.params;
  db.query(`SELECT * FROM business_photos
  JOIN photos
  on business_photos.photo_id = photos.photo_id
  JOIN users
  on photos.user_id = users.user_id
  WHERE business_id='${id}'
  ORDER BY photos.photo_id`, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get('/api/photos/', (req, res) => {
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
