import styled from 'styled-components';
import HeartIcon from '../../assets/heartIcon.svg?react';
import PrevButtonIcon from '../../assets/carousel/prevButton.svg?react';
import NextButtonIcon from '../../assets/carousel/nextButton.svg?react';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';
import { MainContentType } from '../../config';
import { useDotButton } from '../hooks/useDotButton';
import React from 'react';
import { RatingValue } from '../Rating/RatingValue';

interface HotelCardProps {
  hotel: MainContentType;
  likedAds: number[];
  toggleFavorites: (hotelId: number) => void;
  isInteractive: boolean;
}

export const HotelCard: React.FC<HotelCardProps> = ({
  hotel,
  likedAds,
  toggleFavorites,
  isInteractive,
}) => {
  const { img, id, location, distance, date, price, ratings } = hotel;
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  const openHotelDetail: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const url = `hotel/${hotel.id}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrevButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onPrevButtonClick();
  };

  const handleNextButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onNextButtonClick();
  };

  return (
    <HotelCardWrapper onClick={openHotelDetail}>
      <HotelImageWrapper ref={emblaRef}>
        <HotelImageCarousel>
          {img.map((img, index) => {
            return (
              <HotelImageSlide key={index}>
                <HotelImage src={img} />
              </HotelImageSlide>
            );
          })}
        </HotelImageCarousel>
        <HeartButton
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorites(hotel.id);
          }}
          likedAds={likedAds}
          hotelId={id}
        >
          <HeartIcon />
        </HeartButton>
        {!prevBtnDisabled && (
          <PrevButton onClick={handlePrevButtonClick}>
            <PrevButtonIcon />
          </PrevButton>
        )}
        {!nextBtnDisabled && (
          <NextButton onClick={handleNextButtonClick}>
            <NextButtonIcon />
          </NextButton>
        )}
        <DotButtonsContainer>
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} isSelected={index === selectedIndex} />
          ))}
        </DotButtonsContainer>
      </HotelImageWrapper>
      <HotelInfo>
        <HotelSummary>
          <Location>{location}</Location>
          <Distance> {distance}</Distance>
          <Date> {date}</Date>
          <Price>
            <b>{price.toLocaleString('en-US')}</b> night
          </Price>
        </HotelSummary>
        <RatingValue isInteractive={isInteractive} ratings={ratings} />
      </HotelInfo>
    </HotelCardWrapper>
  );
};

const HotelCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  cursor: pointer;
`;

const HotelImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 315px;
  @media (max-width: 1280px) {
    width: 270px;
  }
`;

const HotelImageCarousel = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
`;

const HotelImageSlide = styled.div`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const HotelImage = styled.img`
  width: 315px;
  height: 320px;
  border-radius: 15px;
  object-fit: cover;
  @media (max-width: 1280px) {
    width: 270px;
    height: 255px;
  }
`;

interface HeartButtonProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  likedAds: number[];
  hotelId: number;
}

const HeartButton = styled.button<HeartButtonProps>`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background: none;
  border: none;
  svg {
    fill: ${({ likedAds, hotelId }) =>
      likedAds.includes(hotelId) ? 'var(--pink)' : 'rgba(0, 0, 0, 0.5)'};
    fill-opacity: 1;
  }
  &:hover svg {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 0px var(--box-shadow);
  ${HotelCardWrapper}:hover & {
    opacity: 0.8;
    transition: 0.5s ease;
  }
  &:hover {
    transform: scale(1.1) translateY(-52%);
    transform-origin: center;
    opacity: 1 !important;
  }
`;

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const PrevButton = styled(Button)<ButtonProps>`
  left: 10px;
  padding: 9px;
`;

const NextButton = styled(Button)<ButtonProps>`
  right: 15px;
  padding: 9px;
`;

const DotButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
`;

const DotButton = styled.button<{ isSelected: boolean }>`
  padding: 3px;
  border-radius: 50%;
  border: none;
  background: #ffffff73;
  transform: ${({ isSelected }) => (isSelected ? `scale(1.1)` : undefined)};
  background: ${({ isSelected }) => (isSelected ? `var(--white)` : `#ffffff73`)};
`;

const HotelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  color: var(--dark-gray);
  font-weight: 300;
  font-size: 14px;
  width: 100%;
`;

const HotelSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Location = styled.div`
  font-weight: 500;
`;

const Price = styled.div`
  font-weight: 300;
  & b {
    font-weight: 500;
  }
`;
const Distance = styled.div``;
const Date = styled.div``;
