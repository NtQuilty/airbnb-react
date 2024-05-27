import { useParams } from 'react-router-dom';
import { MAIN_CONTENT_DATA } from '../../config';
import styled from 'styled-components';
import { MainInfo } from './MainInfo';
import { Gallery } from './Gallery';
import { HotelInfo } from './HotelInfo';
import { BookForm } from './BookForm';

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();

  //сделать компонент с ошибкой
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
        rating={hotel.rating}
        reviews={hotel.reviews}
        location={hotel.location}
      />
      <Gallery img={hotel.img} />
      <BookingSection>
        <HotelInfo
          owner={hotel.owner}
          bed={hotel.bed}
          bathroom={hotel.bathroom}
          bedroom={hotel.bedroom}
          guest={hotel.guest}
        />
        <BookForm rating={hotel.rating} reviews={hotel.reviews} price={hotel.price} />
      </BookingSection>
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
  display: flex;
  justify-content: space-between;
  margin: 60px 0;
  gap: 50px;
`;
