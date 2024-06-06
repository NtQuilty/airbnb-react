import React from 'react';
import styled from 'styled-components';

interface ReviewsCountProps {
  reviews: number;
  isInteractive: boolean;
}

export const ReviewsCount: React.FC<ReviewsCountProps> = ({ reviews, isInteractive = true }) => {
  return (
    <ReviewsCountContainer isInteractive={isInteractive}>
      <RatingValue isInteractive={isInteractive}>
        {reviews.toLocaleString('en-US')} reviews
      </RatingValue>
    </ReviewsCountContainer>
  );
};

const ReviewsCountContainer = styled.div<{ isInteractive: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : 'default')};
`;

const RatingValue = styled.span<{ isInteractive: boolean }>`
  font-weight: 500;
  text-decoration: ${({ isInteractive }) => (isInteractive ? 'underline' : 'none')};
  line-height: ${({ isInteractive }) => (isInteractive ? '21px' : '42px')};
  font-size: ${({ isInteractive }) => (isInteractive ? '14px' : '28px')};
`;
