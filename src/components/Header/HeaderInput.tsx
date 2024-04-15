import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { HeaderPic } from './Header';

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 332px;
  height: 55px;
  padding: 5px 10px 5px 50px;
  border-radius: 30px;
  border: 1px solid var(--gray-color);
  color: #bbbbbb;
  font-size: 14px;
  box-shadow: 0px 0px 10px 7px #2222221a;
`;

export default function HeaderInput() {
  const input = useInput();

  return (
    <Div>
      <HeaderPic
        src="./filter-icon.svg"
        width="24px"
        height="24px"
        position="absolute"
        left="17px"
      />
      <Input type="text" {...input} value={'Staycation to Bali'} />
      <HeaderPic
        src="./search-icon.svg"
        width="30px"
        height="30px"
        position="absolute"
        right="17px"
      />
    </Div>
  );
}
