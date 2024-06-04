import React from 'react';
import styled from 'styled-components';
import { RatingValue } from '../Rating/RatingValue';
import { ReviewsCount } from '../ReviewsCount/ReviewsCount';

interface BookFormProps {
  reviews: number;
  price: number;
  ratings: { name: string; rating: number }[];
}

export const BookForm: React.FC<BookFormProps> = ({ reviews, price, ratings }) => {
  const convertRupeesToDollars = Math.round(price / 14900.66225165563);
  const stayDuration = 4;
  const totalCost = convertRupeesToDollars * stayDuration;

  return (
    <BookFormWrapper>
      <HeaderSection>
        <PricePerNight>
          <b>${convertRupeesToDollars}</b> night
        </PricePerNight>
        <RatingSection>
          <RatingValue ratings={ratings} isInteractive />
          <ReviewsCount reviews={reviews} isInteractive />
        </RatingSection>
      </HeaderSection>
      <DetailsSection>
        <DateSection>
          <DateColumn>
            <LabelText>CHECK-IN</LabelText>
            <TextMedium>5/8/2023</TextMedium>
          </DateColumn>
          <DateColumn>
            <LabelText>CHECKOUT</LabelText>
            <TextMedium>5/12/2023</TextMedium>
          </DateColumn>
        </DateSection>
        <GuestsSection>
          <LabelText>GUESTS</LabelText>
          <TextMedium>1 guest</TextMedium>
        </GuestsSection>
      </DetailsSection>
      <ReserveButton>Reserve</ReserveButton>
      <NoticeText>You won’t be charged yet</NoticeText>
      <CostSection>
        <CostDetails>
          <TextBase>
            ${convertRupeesToDollars} x {stayDuration} nights
          </TextBase>
          <TextBase>${totalCost}</TextBase>
        </CostDetails>
        <TotalCostSection>
          <TextBold>Total before taxes</TextBold>
          <TextBold>${totalCost}</TextBold>
        </TotalCostSection>
      </CostSection>
    </BookFormWrapper>
  );
};

const BookFormWrapper = styled.div`
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  padding: 30px 25px;
  border: 2px solid var(--border);
  border-radius: 15px;
  box-shadow: 0px 0px 35px 0px #9b9b9b26;
  white-space: nowrap;
`;

const HeaderSection = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 50px;
`;

const TextBase = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const TextSmall = styled(TextBase)`
  font-size: 10px;
  line-height: 15px;
`;

const TextMedium = styled(TextBase)`
  font-size: 12px;
  line-height: 18px;
`;

const TextLarge = styled(TextBase)`
  font-size: 20px;
  line-height: 42px;
  font-weight: 300;
`;

const TextBold = styled(TextBase)`
  font-weight: 600;
`;

const PricePerNight = styled(TextLarge)`
  b {
    font-size: 28px;
    font-weight: 500;
  }
`;

const RatingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #979797;
  border-radius: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const DateSection = styled.div`
  display: flex;
  border-bottom: 1px solid #979797;
  :first-child {
    border-right: 1px solid #979797;
  }
`;

const DateColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 12px;
`;

const LabelText = styled(TextSmall)`
  border: none !important;
`;

const GuestsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

const ReserveButton = styled.button`
  width: 100%;
  padding: 20px 24px;
  margin-bottom: 20px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: var(--white);
  background-color: var(--pink);
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
`;

const NoticeText = styled(TextBase)``;

const CostSection = styled.section`
  width: 100%;
`;

const CostDetails = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid var(--border);
`;

const TotalCostSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;
