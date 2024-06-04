import styled from 'styled-components';
import { RatingValue } from './RatingValue';
import { ReviewsCount } from '../ReviewsCount/ReviewsCount';
import { LinearWithValueLabel } from '../LinearWithValueLabel/LinearWithValueLabel';
import React from 'react';

interface RatingProps {
  reviews: number;
  ratings: { name: string; rating: number }[];
  isInteractive: boolean;
}

export const Rating: React.FC<RatingProps> = ({ reviews, isInteractive, ratings }) => {
  return (
    <RatingContainer>
      <RatingList>
        <RatingItem>
          <RatingValue ratings={ratings} isInteractive={isInteractive} />
        </RatingItem>
        <RatingItem>
          <ReviewsCount reviews={reviews} isInteractive={isInteractive} />
        </RatingItem>
      </RatingList>
      <ProgressContainer>
        {ratings.map(({ name, rating }, index) => (
          <LinearWithValueLabel key={index} name={name} value={rating} />
        ))}
      </ProgressContainer>
    </RatingContainer>
  );
};

const RatingContainer = styled.div``;

const RatingList = styled.ol`
  display: flex;
  margin-bottom: 35px;
`;

const RatingItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child)::after {
    content: '·';
    font-size: 50px;
    margin: 0 9px;
  }
`;

const ProgressContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 190px;
`;
