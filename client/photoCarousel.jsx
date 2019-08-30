import React from 'react';
import styled from 'styled-components';

import Photo from './photo';

const PhotosSection = styled.section`
  display: flex;
  width: 750px;
  height: 250px;
`;

class PhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        'https://kittenoverload.com/images/a907e923c23ff653673188e11c2f87c2/image.jpg',
        'https://www.publicdomainpictures.net/pictures/170000/velka/cat-isolated-on-the-white-1461322084jmy.jpg',
        'https://www.publicdomainpictures.net/pictures/130000/velka/tabby-kitten.jpg',
      ],
    };
  }

  componentDidMount() {

  }

  render() {
    const { photos } = this.props;
    return (
      <PhotosSection>
        {photos.slice(0, 3).map((photo) => {
          return (
            <Photo photo={photo.medium} />
          );
        })}
      </PhotosSection>
    );
  }
}

export default PhotoCarousel;
