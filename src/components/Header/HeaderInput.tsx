import useInput from '../hooks/useInput';
import styled from 'styled-components';
import FilterIcon from '../../assets/filter-icon.svg?react';
import SearchIcon from '../../assets/search-icon.svg?react';

const HeaderDiv = styled.div`
  height: 55px;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 332px;
  box-shadow: 0px 0px 10px 7px #2222221a;
  border-radius: 30px;
  padding: 5px 15px;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Input = styled.input`
  width: 332px;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  background: none;
  outline: none;
`;

export default function HeaderInput() {
  const input = useInput();
  // Using redux. In the meantime, so

  return (
    <HeaderDiv>
      <FilterIcon width="24px" height="24px" />
      <Input type="text" {...input} placeholder={'Staycation to Bali'} />
      <SearchIcon width="30px" height="30px" />
    </HeaderDiv>
  );
}
