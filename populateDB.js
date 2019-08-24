const mysql = require('mysql');
const data = require('./dataGenerator.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'testing',
  password: 'testing12345',
});

connection.connect();

connection.query('CREATE DATABASE closely', (err, result) => {
  if (err) {
    return err;
  }
  return result;
});

connection.query('USE closely');

connection.query('DROP TABLE photos');

connection.query(
  `CREATE TABLE photos (
photo_id int(200) NOT NULL,
user_id int(25) NOT NULL,
medium varchar(100) NOT NULL,
caption varchar(500) NOT NULL,
label varchar(100) NOT NULL,
helpful int(200) NOT NULL,
not_helpful int(200) NOT NULL,
PRIMARY KEY (photo_id)
)`, (err, result) => {
    if (err) {
      return err;
    }
    return result;
  },
);

const photos = data.createPhotos();

const insertPhotos = (items) => {

  for (let i = 0; i < items.length; i++) {
    const photo = items[i];
    connection.query(
      `INSERT INTO photos (
photo_id, user_id, medium, caption, label, helpful, not_helpful
) VALUES (
${photo.photo_id}, ${photo.user_id}, '${photo.medium}', '${photo.caption}', '${photo.label}', ${photo.helpful}, ${photo.not_helpful}
)`, (err, result) => {
        if (err) {
          return err;
        }
        return result;
      },
    );
  }
};

insertPhotos(photos);

connection.end();
