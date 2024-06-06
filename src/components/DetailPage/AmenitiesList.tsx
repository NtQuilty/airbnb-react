import BeachIcon from '../../assets/secondPage/icon/beachIcon.svg?react';
import CarIcon from '../../assets/secondPage/icon/carIcon.svg?react';
import WifiIcon from '../../assets/secondPage/icon/wifiIcon.svg?react';
import TvIcon from '../../assets/secondPage/icon/tvIcon.svg?react';
import PoolIcon from '../../assets/secondPage/icon/poolIcon.svg?react';
import ConditionerIcon from '../../assets/secondPage/icon/conditionerIcon.svg?react';
import styled from 'styled-components';

export const AmenitiesList = () => {
  return (
    <AmenitiesSection>
      <Title>What this place offers</Title>
      <AmenitiesContainer>
        <AmenitiesGrid>
          <AmenityItem>
            <BeachIcon />
            <Text>Beach access - Beachfront</Text>
          </AmenityItem>
          <AmenityItem>
            <CarIcon />
            <Text>Free parking on premises</Text>
          </AmenityItem>
          <AmenityItem>
            <TvIcon />
            <Text>TV</Text>
          </AmenityItem>
          <AmenityItem>
            <WifiIcon />
            <Text>Wifi</Text>
          </AmenityItem>
          <AmenityItem>
            <PoolIcon />
            <Text>Private Pool</Text>
          </AmenityItem>
          <AmenityItem>
            <ConditionerIcon />
            <Text>Air conditioning</Text>
          </AmenityItem>
        </AmenitiesGrid>
        <ButtonContainer>
          <ShowAllButton>Show all 30 facilitys </ShowAllButton>
        </ButtonContainer>
      </AmenitiesContainer>
    </AmenitiesSection>
  );
};

const AmenitiesSection = styled.section`
  padding: 40px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
`;

const AmenitiesContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const AmenityItem = styled.div`
  display: flex;
  flex: 1 1 calc(50% - 20px);
  align-items: center;
  gap: 20px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const AmenitiesGrid = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  box-sizing: border-box;
`;

const Text = styled.span`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 42px;
`;

const ShowAllButton = styled.button`
  padding: 20px 55px;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: var(--dark-gray);
  border: 1px solid var(--dark-gray);
  border-radius: 12px;
  background: none;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background: var(--gray);
  }
`;
