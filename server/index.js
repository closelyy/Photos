/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./../database/database.js');

const app = express();

app.use(express.urlencoded(({ extended: true })));
app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());

const PORT = process.env.PORT || 3003;
const indexPath = path.join(`${__dirname}/../public/index.html`);

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
      console.log(err);
      res.status(404);
    }
    res.send(result);
  });
});

app.get('/api/photos/', (req, res) => {
  db.query('SELECT * FROM photos', (err, result) => {
    if (err) {
      console.log(err);
      res.status(404);
    }
    res.send(result);
  });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
