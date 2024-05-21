import styled from 'styled-components';
import StarIcon from '../../assets/secondPage/icon/star-icon.svg?react';
import HeartIcon from '../../assets/heartIcon.svg?react';
import PrevButtonIcon from '../../assets/carousel/prev-button.svg?react';
import NextButtonIcon from '../../assets/carousel/next-button.svg?react';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from '../MediaCarousel/CarouselArrowButton';
import { MainContentType } from '../../config';
import { useDotButton } from '../hooks/DotButton';

interface HotelCardProps {
  hotel: MainContentType;
  likedAds: number[];
  addRemoveFavorites: (hotelId: number) => void;
}

interface HeartButtonProps {
  onClick: () => void;
  likedAds: number[];
  hotelId: number;
}

export const HotelCard = ({ hotel, likedAds, addRemoveFavorites }: HotelCardProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps } = useDotButton(emblaApi);

  return (
    <HotelCardWrapper>
      <HotelImageWrapper ref={emblaRef}>
        <HotelImageCarousel>
          {hotel.img.map((img, index) => {
            return (
              <HotelImageSlide key={index}>
                <HotelImage src={img} />
              </HotelImageSlide>
            );
          })}
        </HotelImageCarousel>
        <HeartButton
          onClick={() => addRemoveFavorites(hotel.id)}
          likedAds={likedAds}
          hotelId={hotel.id}
        >
          <HeartIcon />
        </HeartButton>
        {!prevBtnDisabled && (
          <PrevButton onClick={onPrevButtonClick}>
            <PrevButtonIcon />
          </PrevButton>
        )}
        {!nextBtnDisabled && (
          <NextButton onClick={onNextButtonClick}>
            <NextButtonIcon />
          </NextButton>
        )}
        <DotButtonContainer>
          {scrollSnaps.map((_, index) => (
            <DotButton key={index} isSelected={index === selectedIndex} />
          ))}
        </DotButtonContainer>
      </HotelImageWrapper>
      <HotelInfo>
        <HotelSummary>
          <Title>{hotel.title}</Title>
          <Distance> {hotel.distance}</Distance>
          <Date> {hotel.date}</Date>
          <Price>
            <b>{hotel.price}</b> night
          </Price>
        </HotelSummary>
        <Raiting>
          <StarIcon />
          {hotel.rating.toFixed(2)}
        </Raiting>
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

const HeartButton = styled.button<HeartButtonProps>`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  background: none;
  border: none;
  svg {
    fill: ${(props) =>
      props.likedAds.includes(props.hotelId)
        ? 'var(--heart)' //TODO: css-variables SMDMHCE
        : 'var(--fill-heart)'};
    fill-opacity: 1;
  }
  &:hover svg {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 0px #22222240;

  ${HotelCardWrapper}:hover & {
    opacity: 0.8;
    transition: 0.5s ease;
  }
  &:hover {
    transform: scale(1.1) translateY(-46%);
    transform-origin: center;
    opacity: 1 !important;
  }
`;
const PrevButton = styled(Button)`
  left: 10px;
  padding: 11px 13px 11px 12px;
`;

const NextButton = styled(Button)`
  right: 15px;
  padding: 11px 12px 11px 13px;
`;

const DotButtonContainer = styled.div`
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
  transform: ${(props) => (props.isSelected ? `scale(1.1)` : undefined)};
  background: ${(props) => (props.isSelected ? `white` : `#ffffff73`)};
`;

const HotelInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  color: #3e3e3e; //TODO: css-variables SMDMHCE
  font-weight: 300;
  font-size: 14px;
  width: 100%;
`;

const HotelSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 500;
`;
const Raiting = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Price = styled.div`
  font-weight: 300;
  & b {
    font-weight: 500;
  }
`;
const Distance = styled.div``;
const Date = styled.div``;
