import React from 'react';
import styled from 'styled-components';
import PrevButtonIcon from '../../assets/carousel/prevButton.svg?react';
import NextButtonIcon from '../../assets/carousel/nextButton.svg?react';
import { ButtonProps } from './types';

export const PrevButton: React.FC<ButtonProps> = (props) => {
  const { ...restProps } = props;

  return (
    <Button {...restProps}>
      <PrevButtonIcon />
    </Button>
  );
};

export const NextButton: React.FC<ButtonProps> = (props) => {
  const { children, ...restProps } = props;

  return (
    <Button {...restProps}>
      <NextButtonIcon />
    </Button>
  );
};

const Button = styled.button`
  -webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--background);
  padding: 9px 12px;
  z-index: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px 0px #22222240;
`;
