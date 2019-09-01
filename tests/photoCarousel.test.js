/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import PhotoCarousel, { PhotosSection } from '../client/photoCarousel';

const photo1 = {
  photo_id: 1,
  user_id: 11,
  medium: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
  posted: '1982-07-13',
  caption: 'This is a photo cat-tion',
  label: 'Label',
  first_name: 'Julie',
  last_name: 'Hambersam',
  helpful: 1982,
  not_helpful: 713,
};

const photo2 = {
  photo_id: 2,
  user_id: 11,
  medium: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
  posted: '1982-07-13',
  caption: 'This is a photo cat-tion',
  label: 'Label',
  first_name: 'Julie',
  last_name: 'Hambersam',
  helpful: 1982,
  not_helpful: 713,
};

const photo3 = {
  photo_id: 3,
  user_id: 11,
  medium: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
  posted: '1982-07-13',
  caption: 'This is a photo cat-tion',
  label: 'Label',
  first_name: 'Julie',
  last_name: 'Hambersam',
  helpful: 1982,
  not_helpful: 713,
};

const photos = [photo1, photo2, photo3];

describe('Photo Carousel', () => {
  const wrapper = mount(<PhotoCarousel photos={photos} />);

  test('it should display 3 photos', () => {
    const photoComponent = wrapper.find('Photo');
    expect(photoComponent).toHaveLength(3);
  });

  test('it should have a left navigation arrow', () => {
    const full = wrapper.find(PhotosSection);
    expect(full).toHaveLength(1);
  });
});
