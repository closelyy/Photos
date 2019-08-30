import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PhotoContainer = styled.div`
  width: 250px;
  height: 250px;
  transition: transform 1s;
  :hover {
    transform: scale(1.25);
    z-index: 9999;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

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
