import React from 'react';
import { PropType } from './styled';

export const DotButton: React.FC<PropType> = (props) => {
  const { ...restProps } = props;

  return <button {...restProps}></button>;
};
