import { useParams } from 'react-router-dom';
import { MAIN_CONTENT_DATA } from '../../config';
import styled from 'styled-components';
import StarIcon from '../../assets/secondPage/icon/starIcon.svg?react';
import MedalIcon from '../../assets/secondPage/icon/medalIcon.svg?react';
import SaveIcon from '../../assets/secondPage/icon/saveIcon.svg?react';
import ShareIcon from '../../assets/secondPage/icon/shareIcon.svg?react';
import PresentationIcon from '../../assets/secondPage/icon/presentationIcon.svg?react';
import NothingIcon from '../../assets/secondPage/icon/nothingIcon.svg?react';

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
      <Title>{hotel.title}</Title>
      <VtorayaStroka>
        <Info>
          <InfoItem>
            <StarIcon />
            <Raiting>{hotel.rating}</Raiting>
          </InfoItem>
          <InfoItem>
            <Reviews>{hotel.reviews} reviews</Reviews>
          </InfoItem>
          <InfoItem>
            <NothingIcon />
            <SuperHost>Superhost</SuperHost>
          </InfoItem>
          <InfoItem>
            <Location>{hotel.location}</Location>
          </InfoItem>
        </Info>
        <ShareSave>
          <Share>
            <ShareIcon />
            <ShareButton>Share</ShareButton>
          </Share>
          <Save>
            <SaveIcon />
            <SaveButton>Save</SaveButton>
          </Save>
        </ShareSave>
      </VtorayaStroka>
      <Photo>
        {hotel.img.map((img, index) => {
          return <HotelImage src={img} key={index} />;
        })}
        <ShowPhotosButton>Show All Photo</ShowPhotosButton>
      </Photo>
      <LeftRight>
        <Levaya>
          <section style={{ display: 'flex' }}>
            <div style={{ display: 'flex' }}>
              <div>
                <Owner>Entire villa hosted by {hotel.owner}</Owner>
                <InfoHata>
                  <InfoHataItem>{hotel.guest} guests</InfoHataItem>
                  <InfoHataItem>{hotel.bedroom} bedroom</InfoHataItem>
                  <InfoHataItem>{hotel.bed} bed</InfoHataItem>
                  <InfoHataItem>{hotel.bathroom} bath</InfoHataItem>
                </InfoHata>
              </div>
              <img src="../public/images/userAvatars/irfan.png" alt="" />
            </div>
          </section>
        </Levaya>
        <Pravaya></Pravaya>
      </LeftRight>
    </DetailPageWrapper>
  );
};

const DetailPageWrapper = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 20px 45px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 45px;
`;

const VtorayaStroka = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.ol`
  display: flex;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: '·';
    margin: 0 10px;
  }
`;
const Raiting = styled.div``;
const Reviews = styled.div``;
const SuperHost = styled.div``;
const Location = styled.div``;
const Share = styled.div``;
const ShareButton = styled.button``;
const Save = styled.div``;
const SaveButton = styled.button``;
const ShareSave = styled.div`
  display: flex;
  align-items: center;
`;
const Photo = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
`;
const HotelImage = styled.img``;

const ShowPhotosButton = styled.button``;

const LeftRight = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Levaya = styled.div`
  display: flex;
`;
const Pravaya = styled.div``;
const Owner = styled.h2``;
const InfoHata = styled.ol`
  display: flex;
`;
const InfoHataItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: '·';
    margin: 0 10px;
  }
`;
