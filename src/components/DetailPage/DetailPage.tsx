import { useParams } from 'react-router-dom';
import { MAIN_CONTENT_DATA } from '../../config';
import styled from 'styled-components';
import { MainInfo } from './MainInfo';
import { Gallery } from './Gallery';
import { HotelInfo } from './HotelInfo';
import { BookForm } from './BookForm';
import { Rating } from '../Rating/Rating';
import { YandexMap } from '../YandexMap/YandexMap';

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  //Comment:сделать компонент с ошибкой
  if (!id) {
    return <div>id не найден</div>;
  }

  const hotel = MAIN_CONTENT_DATA.find((h) => h.id === parseInt(id, 10));

  if (!hotel) {
    return <div>hotel не найден</div>;
  }

  const {
    id: hotelId,
    title,
    reviews,
    location,
    ratings,
    img,
    owner,
    houseDetails,
    price,
    coordinates,
  } = hotel;

  return (
    <DetailPageWrapper>
      <MainInfo
        id={hotelId}
        title={title}
        reviews={reviews}
        location={location}
        ratings={ratings}
        isInteractive
      />
      <Gallery img={img} />
      <BookingSection>
        <HotelInfo owner={owner} houseDetails={houseDetails} />
        <BookForm reviews={reviews} price={price} ratings={ratings} />
      </BookingSection>
      <Rating reviews={reviews} ratings={ratings} isInteractive={false} />
      <YandexMap location={location} title={title} coordinates={coordinates} />
    </DetailPageWrapper>
  );
};

const DetailPageWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 20px 45px;
  color: var(--dark-gray);
`;

const BookingSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 60px 0 45px;
  gap: 50px;
`;
