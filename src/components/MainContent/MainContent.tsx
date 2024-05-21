import { useEffect, useState } from 'react';
import styled from 'styled-components';
import MapIcon from '../../assets/mapIcon.svg?react';
import { HotelCard } from './HotelCard';
import { MAIN_CONTENT_DATA } from '../../config';

export const MainContent = () => {
  const [likedAds, setLikedAds] = useState(() => {
    const storedLikedAds = localStorage.getItem('LikedAds');
    return storedLikedAds ? JSON.parse(storedLikedAds) : [];
  });

  const addRemoveFavorites = (hotelId: number) => {
    setLikedAds((likedAds: number[]) => {
      if (likedAds.includes(hotelId)) {
        return likedAds.filter((id) => id !== hotelId);
      } else {
        return [...likedAds, hotelId];
      }
    });
  };

  useEffect(() => {
    likedAds.sort((a: number, b: number) => a - b);
    localStorage.setItem('LikedAds', JSON.stringify(likedAds));
  }, [likedAds]);

  return (
    <MainContentWrapper>
      <HotelsContainer>
        {MAIN_CONTENT_DATA.map((hotel) => {
          return (
            <HotelCard
              hotel={hotel}
              key={hotel.id}
              likedAds={likedAds}
              addRemoveFavorites={addRemoveFavorites}
            />
          );
        })}
      </HotelsContainer>
      <HotelMapToggle>
        <ToggleText>Show map</ToggleText>
        <MapIcon />
      </HotelMapToggle>
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
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
  gap: 30px;
`;

const HotelMapToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0 55px;
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
