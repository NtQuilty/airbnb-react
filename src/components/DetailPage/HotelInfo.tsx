import styled from 'styled-components';
import MedalIcon from '../../assets/secondPage/icon/medalIcon.svg?react';
import KeyIcon from '../../assets/secondPage/icon/keyIcon.svg?react';
import NaviIcon from '../../assets/secondPage/icon/naviIcon.svg?react';
import TimerIcon from '../../assets/secondPage/icon/timerIcon.svg?react';

interface HotelInfoProps {
  owner: string;
  guest: number;
  bedroom: number;
  bed: number;
  bathroom: number;
}

export const HotelInfo = ({ owner, guest, bedroom, bed, bathroom }: HotelInfoProps) => {
  const normalizedOwner = owner.replace(/\s+/g, '');

  return (
    <HotelInfoWrapper>
      <TopSection>
        <TopSectionInfo>
          <HostTitle>Entire villa hosted by {owner}</HostTitle>
          <DetailsList>
            <DetailItem>{guest} guests</DetailItem>
            <DetailItem>{bedroom} bedroom</DetailItem>
            <DetailItem>{bed} bed</DetailItem>
            <DetailItem>{bathroom} bath</DetailItem>
          </DetailsList>
        </TopSectionInfo>
        <Avatars src={`../public/images/userAvatars/${normalizedOwner}.png`} alt={owner} />
      </TopSection>
      <FeaturesSection>
        <Feature>
          <MedalIcon />
          <FeatureText>
            <FeatureTitle>{owner} is a Superhost</FeatureTitle>
            <FeatureDescription>
              Superhosts are experienced, highly rated hosts who are committed to providing great
              stays for guests.
            </FeatureDescription>
          </FeatureText>
        </Feature>
        <Feature>
          <KeyIcon />
          <FeatureText>
            <FeatureTitle>Great location</FeatureTitle>
            <FeatureDescription>
              95% of recent guests gave the location a 5-star rating.
            </FeatureDescription>
          </FeatureText>
        </Feature>
        <Feature>
          <NaviIcon />
          <FeatureText>
            <FeatureTitle>Great check-in experience</FeatureTitle>
            <FeatureDescription>
              100% of recent guests gave the check-in process a 5-star rating.
            </FeatureDescription>
          </FeatureText>
        </Feature>
      </FeaturesSection>
      <BookingSection>
        <BookingMessage>
          <b>Only 5 hours left to book.</b> The host will stop accepting bookings for your dates
          soon.
        </BookingMessage>
        <TimerIcon />
      </BookingSection>
    </HotelInfoWrapper>
  );
};

const HotelInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 14px;
  line-height: 21px;
  svg {
    flex-shrink: 0;
  }
`;

const HostTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 42px;
`;

const DetailsList = styled.ol`
  display: flex;
`;

const DetailItem = styled.li`
  display: flex;
  align-items: center;
  font-weight: 400;
  &:not(:last-child)::after {
    content: '·';
    margin: 0 6px;
    color: var(--light-gray);
  }
`;

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const TopSectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Avatars = styled.img`
  width: 80px;
  height: 80px;
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 40px 0;
`;

const Feature = styled.div`
  display: flex;
  gap: 20px;
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeatureTitle = styled.h3`
  font-weight: 600;
`;

const DescriptionText = styled.span`
  font-weight: 400;
  & b {
    font-weight: 500;
  }
`;

const BookingSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 45px;
  margin-top: 35px;
  padding: 20px 30px;
  box-shadow: 0px 0px 2px 0px #2b2b2b59;
  border-radius: 10px;
`;

const FeatureDescription = styled(DescriptionText)``;
const BookingMessage = styled(DescriptionText)``;
