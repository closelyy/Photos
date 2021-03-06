import React from 'react';
import PropTypes from 'prop-types';

import {
  FullContainer, LeftArrowContainer, RightArrowContainer,
  ArrowImage, PhotosSection,
} from '../styledComponents/styledPhotoCarousel';
import ResizeDiv from './ResizeDiv';

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
          {photos.slice(currentFirst, currentFirst + 3).map((photo) => {
            const photoId = photo.photo_id;
            const { caption } = photo;
            const lastInitial = photo.last_name.slice(0, 1);
            const username = `${photo.first_name} ${lastInitial}.`;
            const profilePhoto = photo.profile_photo;
            return (
              <ResizeDiv
                key={photoId}
                photo={photo.medium}
                profilePhoto={profilePhoto}
                caption={caption}
                username={username}
              />
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
