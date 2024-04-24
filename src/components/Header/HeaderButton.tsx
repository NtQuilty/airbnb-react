import styled from 'styled-components';
import EllipsisIcon from '../../assets/ellipsis-icon.svg?react';
import UserIcon from '../../assets/user-icon.svg?react';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 55px;
  gap: 13px;
  border-radius: 30px;
  cursor: pointer;
  background: none;
  border: 1px solid var(--gray-color);
`;

export default function HeaderButton() {
  return (
    <Button>
      <EllipsisIcon />
      <UserIcon />
    </Button>
  );
}
