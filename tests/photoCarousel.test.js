/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import { shallow } from 'enzyme';
import React from 'react';

import {
  LeftArrowContainer, RightArrowContainer, PhotosSection,
} from '../client/styledComponents/styledPhotoCarousel';

import PhotoCarousel from '../client/components/PhotoCarousel';
import Photo from '../client/components/Photo';
import { PhotoContainer } from '../client/styledComponents/styledPhoto';

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
  profile_Photo: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
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
  profile_Photo: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
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
  profile_Photo: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
};

const photo4 = {
  photo_id: 4,
  user_id: 11,
  medium: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
  posted: '1982-07-13',
  caption: 'This is a photo cat-tion',
  label: 'Label',
  first_name: 'Julie',
  last_name: 'Hambersam',
  helpful: 1982,
  not_helpful: 713,
  profile_Photo: 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
};

const photos = [photo1, photo2, photo3, photo4];

describe('Photo Carousel Component', () => {
  describe('Appearance', () => {
    const wrapper = mount(<PhotoCarousel photos={photos} />);
    test('it should display 3 photos', () => {
      const photoComponent = wrapper.find('Photo');
      expect(photoComponent).toHaveLength(3);
    });

    test('it should have a left navigation arrow', () => {
      const full = wrapper.find(PhotosSection);
      expect(full).toHaveLength(1);
    });

    test('it should have a right navigation arrow', () => {
      const rightArrow = wrapper.find(RightArrowContainer);
      expect(rightArrow).toHaveLength(1);
    });
  });

  describe('Functionality', () => {
    test('right arrow should be clickable', () => {
      const rightArrowClick = jest.fn();
      const rightArrow = mount(<RightArrowContainer onClick={rightArrowClick} />)
        .find(RightArrowContainer);
      rightArrow.simulate('click');
      expect(rightArrowClick).toHaveBeenCalled();
    });

    test('left arrow should be clickable', () => {
      const leftArrowClick = jest.fn();
      const leftArrow = mount(<LeftArrowContainer onClick={leftArrowClick} />)
        .find(LeftArrowContainer);
      leftArrow.simulate('click');
      expect(leftArrowClick).toHaveBeenCalled();
    });

    test('right arrow should increment currentFirst by 1', () => {
      const wrapper = shallow(<PhotoCarousel photos={photos} />);
      const instance = wrapper.instance();
      expect(wrapper.state('currentFirst')).toBe(0);
      instance.rightArrowClick();
      expect(wrapper.state('currentFirst')).toBe(1);
    });

    test('right arrow should not increment if there are no additional photos', () => {
      const wrapper = shallow(<PhotoCarousel photos={photos} />);
      const instance = wrapper.instance();
      expect(wrapper.state('currentFirst')).toBe(0);
      instance.rightArrowClick();
      expect(wrapper.state('currentFirst')).toBe(1);
      instance.rightArrowClick();
      expect(wrapper.state('currentFirst')).toBe(1);
    });

    test('left arrow should not decrement if at the start of photos array', () => {
      const wrapper = shallow(<PhotoCarousel photos={photos} />);
      const instance = wrapper.instance();
      expect(wrapper.state('currentFirst')).toBe(0);
      instance.leftArrowClick();
      expect(wrapper.state('currentFirst')).toBe(0);
    });

    test('left arrow should decrement if NOT at start of photos array', () => {
      const wrapper = shallow(<PhotoCarousel photos={photos} />);
      const instance = wrapper.instance();
      expect(wrapper.state('currentFirst')).toBe(0);
      instance.rightArrowClick();
      expect(wrapper.state('currentFirst')).toBe(1);
      instance.leftArrowClick();
      expect(wrapper.state('currentFirst')).toBe(0);
    });
  });
});

describe('Photo Component', () => {
  const imageUrl = 'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg';
  const wrapper = shallow(<Photo photo={imageUrl} />);
  test('it should render a photo container', () => {
    const photoContainer = wrapper.find(PhotoContainer);
    expect(photoContainer).toHaveLength(1);
  });
});
