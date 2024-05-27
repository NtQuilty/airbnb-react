import React from 'react';
import styled from 'styled-components';

interface ReviewsCountProps {
  reviews: number;
}

export const ReviewsCount: React.FC<ReviewsCountProps> = ({ reviews }) => {
  return (
    <ReviewsCountContainer>
      <RatingValue>{reviews.toLocaleString('en-US')} reviews</RatingValue>
    </ReviewsCountContainer>
  );
};

const ReviewsCountContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RatingValue = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;
