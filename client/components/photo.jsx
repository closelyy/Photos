import React from 'react';
import PropTypes from 'prop-types';
import { PhotoContainer, Image } from '../styledComponents/styledPhoto';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { photo } = this.props;
    return (
      <PhotoContainer>
        <Image src={photo} />
      </PhotoContainer>
    );
  }
}

Photo.propTypes = {
  photo: PropTypes.string.isRequired,
};

export default Photo;
