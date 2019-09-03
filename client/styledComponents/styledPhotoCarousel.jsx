import styled from 'styled-components';

const FullContainer = styled.div`
  display: flex;
  width: 750px;
  height: 250px;
  margin-top: 100px;
  margin-left: 100px;
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
    box-shadow: 0px 0px 25px 1px black;
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
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 250px;
  height: 50px;
  z-index: 3;
  color: white;
  background-color: black;
`;

const ProfilePhoto = styled.img`
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 5px;
  margin-left: 5px;
`;

const Text = styled.div`
  padding: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  FullContainer, LeftArrowContainer, RightArrowContainer, ArrowImage,
  PhotosSection, ResizeOnHover, CaptionOpacity, Caption, ProfilePhoto, Text,
};
