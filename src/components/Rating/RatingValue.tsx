import React from 'react';
import StarIcon from '../../assets/secondPage/icon/starIcon.svg?react';
import styled from 'styled-components';
//Danif
interface RatingValueProps {
  isInteractive: boolean;
  ratings: { name: string; rating: number }[];
}

export const RatingValue: React.FC<RatingValueProps> = ({ isInteractive = true, ratings }) => {
  const totalRating = (
    ratings.reduce((acc, elem) => acc + elem.rating, 0) / ratings.length
  ).toFixed(2);

  return (
    <RatingValueContainer isInteractive={isInteractive}>
      <StarIcon />
      <Rating isInteractive={isInteractive}>{totalRating}</Rating>
    </RatingValueContainer>
  );
};

const RatingValueContainer = styled.div<{ isInteractive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ isInteractive }) => (isInteractive ? '5px' : '8px')};
  cursor: ${({ isInteractive }) => (isInteractive ? 'pointer' : 'default')};
  svg {
    width: ${({ isInteractive }) => (isInteractive ? '15px' : '22px')};
    height: ${({ isInteractive }) => (isInteractive ? '14px' : '22px')};
  }
`;

const Rating = styled.span<{ isInteractive: boolean }>`
  font-weight: ${({ isInteractive }) => (isInteractive ? '300' : '500')};
  line-height: ${({ isInteractive }) => (isInteractive ? '21px' : '42px')};
  font-size: ${({ isInteractive }) => (isInteractive ? '14px' : '28px')};
`;
