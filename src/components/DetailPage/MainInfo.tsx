import styled from 'styled-components';
import SaveIcon from '../../assets/secondPage/icon/saveIcon.svg?react';
import ShareIcon from '../../assets/secondPage/icon/shareIcon.svg?react';
import NothingIcon from '../../assets/secondPage/icon/nothingIcon.svg?react';
import { RatingValue } from '../Rating/RatingValue';
import { ReviewsCount } from '../ReviewsCount/ReviewsCount';
import { useFavorites } from '../hooks/useFavorites';

interface MainInfoProps {
  id: number;
  title: string;
  reviews: number;
  location: string;
  isInteractive: boolean;
  ratings: { name: string; rating: number }[];
}

export const MainInfo: React.FC<MainInfoProps> = ({
  id,
  title,
  reviews,
  location,
  isInteractive,
  ratings,
}) => {
  const { likedAds, toggleFavorites } = useFavorites();

  return (
    <MainInfoWrapper>
      <Heading>{title}</Heading>
      <InfoContainer>
        <DetailsList>
          <DetailItem>
            <RatingValue ratings={ratings} isInteractive={isInteractive} />
          </DetailItem>
          <DetailItem>
            <ReviewsCount reviews={reviews} isInteractive={isInteractive} />
          </DetailItem>
          <DetailItem>
            <NothingIcon />
            <SuperHostLabel>Superhost</SuperHostLabel>
          </DetailItem>
          <DetailItem>
            <LocationLabel>{location}</LocationLabel>
          </DetailItem>
        </DetailsList>
        <ActionGroup>
          <ShareButton>
            <ShareIcon />
            <ButtonLabel>Share</ButtonLabel>
          </ShareButton>
          <SaveButton
            onClick={() => {
              toggleFavorites(id);
            }}
            likedAds={likedAds}
            id={id}
          >
            <SaveIcon />
            <ButtonLabel>{likedAds.includes(id) ? 'Saved' : 'Save'}</ButtonLabel>
          </SaveButton>
        </ActionGroup>
      </InfoContainer>
    </MainInfoWrapper>
  );
};

const MainInfoWrapper = styled.div`
  margin-bottom: 35px;
`;

const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 45px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 21px;
`;

const DetailsList = styled.ol`
  display: flex;
  font-weight: 300;
`;

const DetailItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: '·';
    margin: 0 6px;
    color: var(--light-gray);
  }
`;

const SuperHostLabel = styled.span`
  margin-left: 5px;
`;

const LocationLabel = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border: none;
  background: none;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background: var(--gray);
    border-radius: 10px;
  }
  svg {
    width: 18px;
    height: 18px;
  }
`;
interface SaveButtonProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  likedAds: number[];
  id: number;
}
const SaveButton = styled(ActionButton)<SaveButtonProps>`
  svg {
    fill: ${({ likedAds, id }) => (likedAds.includes(id) ? 'var(--pink)' : 'none')};
    stroke: ${({ likedAds, id }) => (likedAds.includes(id) ? 'none' : '#3E3E3E')};
    fill-opacity: 1;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ShareButton = styled(ActionButton)``;
const ButtonLabel = styled.span`
  font-size: 20px;
`;
