/* eslint-disable no-undef */
const data = require('./../database/dataGenerator');

describe('createBusinesses', () => {
  const businesses = data.createBusinesses();
  test('it should return an array with 100 business listings', () => {
    expect(businesses.length).toBe(100);
  });

  test('a business should contain the following keys: business_id, name, profile photo', () => {
    const business = businesses[0];
    const keys = Object.keys(business);
    expect(business).toHaveProperty('business_id');
    expect(business).toHaveProperty('name');
    expect(business).toHaveProperty('profile_photo');
    expect(keys.length).toBe(3);
  });
});

describe('createBizPhotoRelationship', () => {
  const bizPhotoArray = data.createBizPhotoRelationship();
  test('it should return an array with 100 arrays containing a random number of photos between 10 and 30', () => {
    expect(bizPhotoArray.length).toBe(100);
  });

  test('each array should contain 10 to 30 photo urls', () => {
    let correctAmount = false;
    for (let i = 0; i < bizPhotoArray.length; i += 1) {
      const photos = bizPhotoArray[i];
      if (photos.length < 10 || photos.length > 30) {
        break;
      }
      correctAmount = true;
    }
    expect(correctAmount).toBe(true);
  });
});

describe('createUsers', () => {
  const users = data.createUsers();
  test('it should return an array with 25 users', () => {
    expect(users.length).toBe(25);
  });

  test('a user should contain the following keys: user_id, profile_photo, first_name, last_name, friends, reviews', () => {
    const user = users[0];
    const keys = Object.keys(user);
    expect(user).toHaveProperty('user_id');
    expect(user).toHaveProperty('profile_photo');
    expect(user).toHaveProperty('first_name');
    expect(user).toHaveProperty('last_name');
    expect(user).toHaveProperty('friends');
    expect(user).toHaveProperty('reviews');
    expect(keys.length).toBe(6);
  });
});
