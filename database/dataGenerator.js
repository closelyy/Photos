const Faker = require('faker');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

// Creates an array of businesses
const createBusinesses = (quantity = 100) => {
  const businessName = () => `${Faker.random.word()} ${Faker.random.word()}`;
  const businessArray = [];
  for (let i = 0; i < quantity; i += 1) {
    const business = {
      business_id: i + 1,
      name: businessName(),
      profile_photo: Faker.image.imageUrl(null, null, 'food', true, false),
    };
    businessArray.push(business);
  }
  return businessArray;
};

// Creates an array of a random selection of photos per business
const createBizPhotoRelationship = () => {
  const bizPhotoArray = [];
  for (let i = 0; i < 100; i += 1) {
    const addPhotoQuantity = getRandomInt(20) + 10;
    let photoArray = [];
    while (photoArray.length <= addPhotoQuantity) {
      const randPhoto = getRandomInt(99) + 1;
      if (!photoArray.includes(randPhoto)) {
        photoArray.push(randPhoto);
      }
    }
    bizPhotoArray.push(photoArray);
    photoArray = [];
  }
  return bizPhotoArray;
};

// create 25 users
const createUsers = (quantity = 25) => {
  const usersArray = [];
  for (let i = 0; i < quantity; i += 1) {
    const user = {
      user_id: i + 1,
      profile_photo: Faker.image.imageUrl(null, null, 'avatar', true, false),
      first_name: Faker.name.firstName(),
      last_name: Faker.name.lastName(),
      friends: getRandomInt(1000),
      reviews: getRandomInt(1000),
    };
    usersArray.push(user);
  }
  return usersArray;
};

// Generates a random caption for photos
const createRandomCaption = () => {
  const selection = getRandomInt(3);
  // eslint-disable-next-line default-case
  switch (selection) {
    case 1:
      return Faker.lorem.words(getRandomInt(10) + 5);
    case 2:
      return Faker.lorem.sentences(getRandomInt(3) + 1);
  }
  return '';
};

// create 100 photos
const createPhotos = (quantity = 100) => {
  const photoArray = [];
  for (let i = 0; i < quantity; i += 1) {
    const photo = {
      photo_id: i + 1,
      user_id: getRandomInt(24) + 1,
      medium: Faker.image.imageUrl(null, null, 'food', true, false),
      posted: Faker.date.recent(600),
      caption: createRandomCaption(),
      label: Faker.random.word(),
      helpful: getRandomInt(200),
      not_helpful: getRandomInt(200),
    };
    photoArray.push(photo);
  }
  return photoArray;
};

module.exports = {
  createBusinesses,
  createBizPhotoRelationship,
  createPhotos,
  createUsers,
  createRandomCaption,
  getRandomInt,
};
