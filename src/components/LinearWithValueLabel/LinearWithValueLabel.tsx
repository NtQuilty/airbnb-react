import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface LinearWithValueLabelProps extends LinearProgressProps {
  key: number;
  value: number;
  name: string;
}

export const LinearWithValueLabel: React.FC<LinearWithValueLabelProps> = ({
  value,
  key,
  name,
  color,
  ...restProps
}) => {
  const [values, setValues] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValues(value);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <DivTwo>
      <Name>{name}</Name>
      <DivFive>
        <DivSix>
          <DivSeven>
            <LinearProgress
              variant="determinate"
              color={'inherit'}
              {...restProps}
              value={values * 20}
            />
          </DivSeven>
          <Pone>{value.toFixed(1)}</Pone>
        </DivSix>
      </DivFive>
    </DivTwo>
  );
};

const DivTwo = styled.div`
  display: flex;
  flex: 1 1 calc(50% - 190px);
  align-items: center;
  justify-content: space-between;
`;

const DivSix = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const DivFive = styled.div``;
const DivSeven = styled.div`
  width: 170px;
`;

const Name = styled.div`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

const Pone = styled.p`
  text-align: center;
  width: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
