import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import StarIcon from '../../assets/secondPage/icon/star-icon.svg?react';
import MapIcon from '../../assets/mapIcon.svg?react';
import HeartIcon from '../../assets/heartIcon.svg?react';
import PrevButtonIcon from '../../assets/carousel/prev-button.svg?react';
import NextButtonIcon from '../../assets/carousel/next-button.svg?react';
import { HeartButtonProps, HotelCardProps } from './styled';

interface HotelsProps {
  hotels: HotelCardProps[];
}

export const HotelList: React.FC<HotelsProps> = ({ hotels }) => {
  const [likedAds, setLikedAds] = useState(() => {
    const storedLikedAds = localStorage.getItem('LikedAds');
    return storedLikedAds ? JSON.parse(storedLikedAds) : [];
  });

  const addRemoveFavorites = useCallback(
    (hotelId: number) => {
      setLikedAds((likedAds: number[]) => {
        if (likedAds.includes(hotelId)) {
          return likedAds.filter((id) => id !== hotelId);
        } else {
          return [...likedAds, hotelId];
        }
      });
    },
    [setLikedAds],
  );

  useEffect(() => {
    localStorage.setItem('LikedAds', JSON.stringify(likedAds));
  }, [likedAds]);

  return (
    <MainContent>
      <HotelsContainer>
        {hotels.map((hotel) => {
          return (
            <HotelCard key={hotel.id}>
              <HotelImageWrapper>
                <HeartButton
                  onClick={() => addRemoveFavorites(hotel.id)}
                  likedAds={likedAds}
                  hotelId={hotel.id}
                >
                  <HeartIcon />
                </HeartButton>
                {hotel.img.map((img, index) => {
                  return <HotelImage key={index} src={img} />;
                })}
                <PrevButton>
                  <PrevButtonIcon />
                </PrevButton>
                <NextButton>
                  <NextButtonIcon />
                </NextButton>
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
            </HotelCard>
          );
        })}
      </HotelsContainer>
      <HotelMapToggle>
        <ToggleText>Show map</ToggleText>
        <MapIcon />
      </HotelMapToggle>
    </MainContent>
  );
};

const MainContent = styled.div`
  padding: 20px 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HotelsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Button = styled.button`
  opacity: 0;
  cursor: pointer;
  border: none;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 0px #22222240;
`;

const PrevButton = styled(Button)`
  margin-left: 10px;
  margin-top: 45%;
  padding: 11px 14px 9px 13px;
`;

const NextButton = styled(Button)`
  margin-right: 13px;
  margin-top: 45%;
  margin-left: 85%;
  padding: 11px 13px 9px 15px;
`;

const HeartButton = styled.button<HeartButtonProps>`
  background: none;
  margin-top: 5%;
  margin-left: 85%;
  cursor: pointer;
  border: none;
  position: absolute;
  svg {
    fill: ${(props) =>
      props.likedAds.includes(props.hotelId)
        ? 'var(--heart)' //TODO: css-variables SMDMHCE
        : 'none'};
    fill-opacity: 1;
  }
  &:hover svg {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

const HotelCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  cursor: pointer;
  padding-bottom: 30px;
  &:hover ${Button} {
    opacity: 0.9;
    transition: 0.5s ease;
  }
`;

const HotelImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 300px;
  @media (max-width: 1400px) {
    width: 275px;
    height: 280px;
  }
`;

const HotelImage = styled.img`
  margin-right: 10px;
  object-fit: cover;
  border-radius: 15px;
`;

const HotelInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
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

const HotelMapToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 20px;
  border: none;
  border-radius: 25px;
  background-color: var(--black);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease;
  }
`;

const ToggleText = styled.div`
  color: var(--white);
  font-size: 14px;
`;
