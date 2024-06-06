import styled from 'styled-components';
import { RatingValue } from './RatingValue';
import { ReviewsCount } from '../ReviewsCount/ReviewsCount';
import { ProgressBarWithLabel } from '../ProgressBarWithLabel/ProgressBarWithLabel';
import React, { useEffect, useRef, useState } from 'react';

interface RatingProps {
  reviews: number;
  ratings: { name: string; rating: number }[];
  isInteractive: boolean;
}

export const Rating: React.FC<RatingProps> = ({ reviews, isInteractive, ratings }) => {
  const [visibility, setVisibility] = useState(false);
  const ratingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          setVisibility(true);
        }
      },
      { threshold: 0.3 },
    );

    if (ratingRef.current) {
      observer.observe(ratingRef.current);
    }

    return () => {
      if (ratingRef.current) {
        observer.unobserve(ratingRef.current);
      }
    };
  }, []);

  return (
    <RatingContainer ref={ratingRef}>
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
          <ProgressBarWithLabel key={index} name={name} rating={rating} visibility={visibility} />
        ))}
      </ProgressContainer>
    </RatingContainer>
  );
};

const RatingContainer = styled.div`
  padding-bottom: 45px;
  border-bottom: 1px solid var(--border);
`;

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
