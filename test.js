const Faker = require('faker');

console.log(Faker.helpers);

let faker = Faker;

let fakerBuzz = Faker.company.bsBuzz();

console.log('faker:', faker);

let catchPhrase = `${Faker.image.imageUrl(null, null, 'food', true, false)}` //the ${Faker.company.catchPhraseNoun()}`;

console.log('bsbuzz:', fakerBuzz);

console.log('Catchphrase:', catchPhrase);

console.log(Faker.date.recent(600));

console.log(Date.now().toString(22));

let count = 0;

// create 100 businesses
let business = {
  'business_id': ++count,
  'profile_photo': Faker.imageUrl(null, null, 'food', true, false),
};

// create assocations between businesses and photos
let business_photos = {
  // to create this table, I need to loop through the businesses
    // then add references to a random number of photos from the photos table
      // NOTE: this can be based on a random number 1-100 (for the photos ID);
}

// create 25 users
let users =   {
  'user_id': ++count,
  'profile_photo': 'https://images.unsplash.com/a2f8c40e39b8dfee1534eb32acfa6bc7',
  'first_name': Faker.first_name(),
  'last_name': Faker.last_name(),
  'friends': getRandomInt(1000),
  'reviews': getRandomInt(1000),
}


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const createRandomCaption = () => {
  let selection = getRandomInt(3);
  switch (selection) {
    case 0:
      return '';
    case 1:
      return Faker.lorem.words(getRandomInt(10) + 5); // random between 5 and 10
    case 2:
      return Faker.lorem.sentences(getRandomInt(3) + 1) // random between 1 and 4
  }
}

// create 100 photos
let obj = {
  'photo_id': ++count,
  'user_id': null, //randbetween 1 and 25
  // 'small': 'https://images.unsplash.com/a2f8c40e39b8dfee1534eb32acfa6bc7',
  'medium': null, // loremflickr (breakfast || dinner)
  // 'large': 'https://images.unsplash.com/27a346c2362207494baa7b76f5d606e5',
  'date': Faker.date.recent(600),
  'caption': createRandomCaption(),
  'label': Faker.lorem.word(),
  'helpful': getRandomInt(200),
  'not_helpful': getRandomInt(200),
}



