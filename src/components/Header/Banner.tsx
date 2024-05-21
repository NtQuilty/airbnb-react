import { useState } from 'react';
import styled from 'styled-components';
import CrossIcon from '../../assets/headerIcon/crossIcon.svg?react';

export const Banner = () => {
  const [isVisible, setIsVisible] = useState(() => {
    const savedState = localStorage.getItem('Banner');
    return savedState ? JSON.parse(savedState) : true;
  });

  const HideBanner = () => {
    setIsVisible(false);
    localStorage.setItem('Banner', JSON.stringify(false));
  };

  if (!isVisible) return null;

  return (
    <BackgroundContainer>
      <BannerContainer>
        <TextContent>
          Hey,&nbsp;<b>Where are you going?</b>
        </TextContent>
        <CloseButton onClick={HideBanner}>
          <CrossIcon />
        </CloseButton>
      </BannerContainer>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div`
  background: var(--gray);
`;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;

const TextContent = styled.div`
  display: flex;
  margin-left: 42px;
  flex: 1;
  justify-content: center;
  padding: 23px 0;
  color: var(--dark-gray);
  font-size: 16px;
  font-weight: 500;
  & b {
    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  background: none;
  padding: 0 25px 0 0;
`;
