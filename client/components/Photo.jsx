import React from 'react';
import PropTypes from 'prop-types';
import { PhotoContainer, Image } from '../styledComponents/styledPhoto';

const Photo = (props) => {
  const { photo } = props;
  return (
    <PhotoContainer>
      <Image src={photo} />
    </PhotoContainer>
  );
};

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Photo;
