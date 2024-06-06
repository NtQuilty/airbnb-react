import { Map, Placemark } from '@pbe/react-yandex-maps';
import React from 'react';
import styled from 'styled-components';

interface YandexMapProps {
  location: string;
  title: string;
  coordinates: number[];
}

export const YandexMap: React.FC<YandexMapProps> = ({ location, title, coordinates }) => {
  return (
    <MapContainer>
      <LocationInfo>
        <Title>Where you’ll be</Title>
        <Text>{location}</Text>
      </LocationInfo>
      <Map
        defaultState={{
          center: coordinates,
          zoom: 10,
          controls: ['zoomControl'],
        }}
        width={'100%'}
        height={'530px'}
      >
        <Placemark
          geometry={coordinates}
          properties={{
            balloonContentBody: `${title}`,
          }}
          options={{
            iconLayout: 'default#image',
            iconImageHref: '/images/baloonIcon.svg',
          }}
        />
      </Map>
    </MapContainer>
  );
};

const MapContainer = styled.div`
  padding-bottom: 60px;
  border-bottom: 1px solid var(--border);
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 45px 0;
`;
const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 42px;
`;
const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
