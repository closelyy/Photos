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

connection.query('DROP TABLE IF EXISTS photos');
connection.query('DROP TABLE IF EXISTS users');
connection.query('DROP TABLE IF EXISTS businesses');
connection.query('DROP TABLE IF EXISTS business_photos');

connection.query(
  `CREATE TABLE photos (
photo_id INT(200) NOT NULL PRIMARY KEY,
user_id INT NOT NULL,
medium VARCHAR(100) NOT NULL,
posted VARCHAR(255) NOT NULL,
caption VARCHAR(500) NOT NULL,
label VARCHAR(100) NOT NULL,
helpful INT NOT NULL,
not_helpful INT NOT NULL
)`, (err, result) => {
    if (err) {
      return err;
    }
    return result;
  },
);

connection.query(
  `CREATE TABLE users (
user_id INT(25) NOT NULL PRIMARY KEY,
profile_photo VARCHAR(100) NOT NULL,
first_name VARCHAR(25) NOT NULL,
last_name VARCHAR(25) NOT NULL,
friends INT NOT NULL,
reviews INT NOT NULL
)`, (err, result) => {
    if (err) {
      return err;
    }
    return result;
  },
);

connection.query(
  `CREATE TABLE businesses (
business_id INT(100) NOT NULL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
profile_photo VARCHAR(100) NOT NULL
)`, (err, result) => {
    if (err) {
      return err;
    }
    return result;
  },
);

connection.query(
  `CREATE TABLE business_photos (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
business_id INT NOT NULL,
photo_id INT NOT NULL,
FOREIGN KEY (business_id)
REFERENCES businesses(business_id),
FOREIGN KEY (photo_id)
REFERENCES photos(photo_id)
)`, (err, result) => {
    if (err) {
      return (err);
    }
    return result;
  },
);

const insertPhotos = (records) => {
  for (let i = 0; i < records.length; i += 1) {
    const photo = records[i];
    connection.query(
      'INSERT INTO photos ('
      + 'photo_id, user_id, medium, posted, caption, label, helpful, not_helpful'
      + ') VALUES ('
      + `${photo.photo_id}, ${photo.user_id}, '${photo.medium}', '${photo.posted}', '${photo.caption}', '${photo.label}', ${photo.helpful}, ${photo.not_helpful}`
      + ')', (err, result) => {
        if (err) {
          return (err);
        }
        return result;
      },
    );
  }
};

const insertUsers = (records) => {
  for (let i = 0; i < records.length; i += 1) {
    const user = records[i];
    connection.query(
      'INSERT INTO users ('
      + 'user_id, profile_photo, first_name, last_name, friends, reviews'
      + ') VALUES ('
      + `${user.user_id}, '${user.profile_photo}', '${user.first_name}', '${user.last_name}', ${user.friends}, ${user.reviews}`
      + ')', (err, result) => {
        if (err) {
          return err;
        }
        return result;
      },
    );
  }
};

const insertBusinesses = (records) => {
  for (let i = 0; i < records.length; i += 1) {
    const business = records[i];
    connection.query(
      'INSERT INTO businesses ('
      + 'business_id, name, profile_photo'
      + ') VALUES ('
      + `${business.business_id}, "${business.name}", '${business.profile_photo}'`
      + ')', (err, result) => {
        if (err) {
          return (err);
        }
        return result;
      },
    );
  }
};

const insertBusinessPhotos = (records) => {
  for (let i = 0; i < records.length; i += 1) {
    const bizPhotos = records[i];
    for (let j = 0; j < bizPhotos.length; j += 1) {
      connection.query(
        'INSERT INTO business_photos ('
        + 'business_id, photo_id'
        + ') VALUES ('
        + `${i + 1}, ${bizPhotos[j]}`
        + ')', (err, result) => {
          if (err) {
            return (err);
          }
          return result;
        },
      );
    }
  }
};

const photos = data.createPhotos();
const users = data.createUsers();
const businesses = data.createBusinesses();
const businessPhotos = data.createBizPhotoRelationship();

insertPhotos(photos);
insertUsers(users);
insertBusinesses(businesses);
insertBusinessPhotos(businessPhotos);

connection.end();
