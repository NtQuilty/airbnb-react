import styled from 'styled-components';
import PresentationIcon from '../../assets/secondPage/icon/presentationIcon.svg?react';
import React from 'react';

interface GalleryProps {
  img: string[];
}

export const Gallery: React.FC<GalleryProps> = ({ img }) => {
  return (
    <GalleryWrapper>
      <GalleryGrid>
        {img.map((image, index) => (
          <PhotoContainer key={index}>
            <Photo src={image} />
          </PhotoContainer>
        ))}
      </GalleryGrid>
      <ShowPhotosButton>
        <PresentationIcon />
        <ButtonText>Show All Photos</ButtonText>
      </ShowPhotosButton>
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  position: relative;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const PhotoContainer = styled.div`
  border-radius: 15px;
  cursor: pointer;
  &:first-of-type {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const Photo = styled.img`
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 100%;
  &:hover {
    filter: brightness(0.9);
  }
`;

const ShowPhotosButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 15px;
  background-color: var(--white);
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-weight: 600;
  line-height: 21px;
`;
