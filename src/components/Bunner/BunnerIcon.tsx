import styled from 'styled-components';
import BunnerIcon from '../../assets/close-icon.svg?react';

const Button = styled.button`
  display: grid;
  justify-items: end;
  border: none;
  cursor: pointer;
  background: none;
  padding: 0 25px 0 0;
`;

interface BunnerIconProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function BunnerIconButton({ onClick }: BunnerIconProps) {
  return (
    <Button type="button" onClick={onClick}>
      <BunnerIcon />
    </Button>
  );
}
