import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ProgressBarWithLabelProps extends LinearProgressProps {
  rating: number;
  name: string;
  visibility: boolean;
}

export const ProgressBarWithLabel: React.FC<ProgressBarWithLabelProps> = ({
  rating,
  name,
  visibility,
  color,
  value,
  ...restProps
}) => {
  const [values, setValues] = useState(0);

  useEffect(() => {
    if (visibility) {
      const timeoutId = setTimeout(() => {
        setValues(rating);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [visibility]);

  return (
    <ProgressContainer>
      <ProgressLabel>{name}</ProgressLabel>
      <ProgressContent>
        <ProgressDetails>
          <ProgressBarContainer>
            <LinearProgress
              variant="determinate"
              color={'inherit'}
              {...restProps}
              value={values * 20}
            />
          </ProgressBarContainer>
          <ProgressValue>{rating.toFixed(1)}</ProgressValue>
        </ProgressDetails>
      </ProgressContent>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  display: flex;
  flex: 1 1 calc(50% - 190px);
  align-items: center;
  justify-content: space-between;
`;

const ProgressDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ProgressBarContainer = styled.div`
  width: 170px;
`;

const ProgressLabel = styled.div`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const ProgressValue = styled.p`
  text-align: center;
  width: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const ProgressContent = styled.div``;
