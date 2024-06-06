import styled from 'styled-components';
import MapIcon from '../../assets/mapIcon.svg?react';
import { HotelCard } from './HotelCard';
import { MAIN_CONTENT_DATA } from '../../config';
import { useFavorites } from '../hooks/useFavorites';

export const MainContent = () => {
  const { likedAds, toggleFavorites } = useFavorites();

  return (
    <MainContentWrapper>
      <HotelsContainer>
        {MAIN_CONTENT_DATA.map((hotel) => {
          return (
            <HotelCard
              hotel={hotel}
              key={hotel.id}
              likedAds={likedAds}
              toggleFavorites={toggleFavorites}
              isInteractive
            />
          );
        })}
      </HotelsContainer>
      <ShowMapButton>
        <ToggleText>Show map</ToggleText>
        <MapIcon />
      </ShowMapButton>
    </MainContentWrapper>
  );
};

const MainContentWrapper = styled.div`
  position: relative;
  max-width: 1350px;
  margin: 0 auto;
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

const ShowMapButton = styled.button`
  position: fixed;
  bottom: 40px;
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
  }
`;

const ToggleText = styled.div`
  color: var(--white);
  font-size: 14px;
`;
