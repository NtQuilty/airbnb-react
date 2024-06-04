import { useParams } from 'react-router-dom';
import { MAIN_CONTENT_DATA } from '../../config';
import styled from 'styled-components';
import { MainInfo } from './MainInfo';
import { Gallery } from './Gallery';
import { HotelInfo } from './HotelInfo';
import { BookForm } from './BookForm';
import { Rating } from '../Rating/Rating';

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

  return (
    <DetailPageWrapper>
      <MainInfo
        id={hotel.id}
        title={hotel.title}
        reviews={hotel.reviews}
        location={hotel.location}
        ratings={hotel.ratings}
        isInteractive
      />
      <Gallery img={hotel.img} />
      <BookingSection>
        <HotelInfo owner={hotel.owner} houseDetails={hotel.houseDetails} />
        <BookForm reviews={hotel.reviews} price={hotel.price} ratings={hotel.ratings} />
      </BookingSection>
      <Rating reviews={hotel.reviews} ratings={hotel.ratings} isInteractive={false} />
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
  margin: 60px 0;
  gap: 50px;
`;
