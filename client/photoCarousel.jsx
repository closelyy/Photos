import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Photo from './photo';

const FullContainer = styled.div`
  display: flex;
  width: 750px;
  height: 250px;
`;

const LeftArrowContainer = styled.div`
  position: relative;
  margin-right: -75px;
  margin-top: 90px;
  width: 50px;
  height: 50px;
  z-index: 10;
`;

const RightArrowContainer = styled.div`
  position: relative;
  margin-left: -75px;
  margin-top: 90px;
  width: 50px;
  height: 50px;
  z-index: 10;
`;

const ArrowImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const PhotosSection = styled.section`
  display: flex;
  width: 750px;
  height: 250px;
  z-index: 1;
`;

const ResizeOnHover = styled.div`
  width: 250px;
  height: 250px;
  z-index: 2;
  transition: transform 1s;
  :hover {
    transform: scale(1.25);
    z-index: 9001;
  }
`;

const CaptionOpacity = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  transition: opacity 1s;
  opacity: 0;
  margin-top: -250px;
  :hover {
    opacity: 0.7;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 0px;
  width: 250px;
  height: 50px;
  z-index: 3;
  color: white;
  background-color: black;
`;

const Text = styled.div`
  padding: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFirst: 0,
    };
    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
  }

  leftArrowClick() {
    this.setState((state) => {
      if (state.currentFirst !== 0) {
        return { currentFirst: state.currentFirst - 1 };
      }
      return undefined;
    });
  }

  rightArrowClick() {
    this.setState((state, props) => {
      if (state.currentFirst !== props.photos.length - 3) {
        return { currentFirst: state.currentFirst + 1 };
      }
      return undefined;
    });
  }

  render() {
    const { currentFirst } = this.state;
    const { photos } = this.props;
    return (
      <FullContainer>
        <LeftArrowContainer onClick={this.leftArrowClick}>
          <ArrowImage src="https://i.ibb.co/LRw50Pv/left-Arrow.png" />
        </LeftArrowContainer>
        <PhotosSection>
          {photos.map((photo) => {
            // eslint-disable-next-line jsx-a11y/alt-text
            return <img style={{ visibility: 'hidden', position: 'absolute' }} src={photo.medium} />;
          })}

          {photos.slice(currentFirst, currentFirst + 3).map((photo) => {
            const photoId = photo.photo_id;
            const { caption } = photo;
            return (
              <ResizeOnHover>
                <Photo key={photoId} photo={photo.medium} />
                <CaptionOpacity>
                  <Caption>
                    <Text>{caption}</Text>
                  </Caption>
                </CaptionOpacity>
              </ResizeOnHover>
            );
          })}
        </PhotosSection>
        <RightArrowContainer onClick={this.rightArrowClick}>
          <ArrowImage src="https://i.ibb.co/cbydqtS/right-Arrow.png" />
        </RightArrowContainer>
      </FullContainer>
    );
  }
}

PhotoCarousel.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      photo_id: PropTypes.number.isRequired,
      user_id: PropTypes.number.isRequired,
      medium: PropTypes.string.isRequired,
      posted: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      helpful: PropTypes.number.isRequired,
      not_helpful: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default PhotoCarousel;
