import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';
import {
  ResizeOnHover, CaptionOpacity, Caption, ProfilePhoto, Text,
} from '../styledComponents/styledPhotoCarousel';

const ResizeDiv = (props) => {
  const {
    photo, profilePhoto, caption, username,
  } = props;
  return (
    <ResizeOnHover>
      <Photo photo={photo} />
      <CaptionOpacity>
        <Caption>
          <ProfilePhoto src={profilePhoto} />
          <Text>{caption.length ? caption : `Photo by ${username}`}</Text>
        </Caption>
      </CaptionOpacity>
    </ResizeOnHover>
  );
};

ResizeDiv.propTypes = {
  photo: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  profilePhoto: PropTypes.string.isRequired,
};

export default ResizeDiv;
