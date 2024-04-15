import styled from 'styled-components';
import { HeaderPic } from './Header';

export const Button = styled.button`
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
    <>
      <Button>
        <HeaderPic src="./ellipsis-icon.svg" alt="Ellipsis icon" />
        <HeaderPic src="./user-icon.svg" alt="User icon" />
      </Button>
    </>
  );
}
