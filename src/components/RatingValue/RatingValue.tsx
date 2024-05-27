import React from 'react';
import StarIcon from '../../assets/secondPage/icon/starIcon.svg?react';
import styled from 'styled-components';

interface RatingValueProps {
  rating: number;
}

export const RatingValue: React.FC<RatingValueProps> = ({ rating }) => {
  return (
    <RatingValueContainer>
      <StarIcon />
      <Rating>{rating}</Rating>
    </RatingValueContainer>
  );
};

const RatingValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Rating = styled.span`
  font-weight: 300;
  line-height: 21px;
`;
