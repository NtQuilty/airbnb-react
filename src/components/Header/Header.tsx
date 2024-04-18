import HeaderButton from './HeaderButton';
import HeaderInput from './HeaderInput';
import styled from 'styled-components';
import LogoIcon from '../../assets/logo-icon.svg?react';
import GlobeIcon from '../../assets/globe-icon.svg?react';
import BunnerComponents from '../Bunner/Bunner';

const Header = styled.div`
  display: flex;
  justify-content: center;
  height: 90px;
  border-top: 1px solid var(--gray-color);
  border-bottom: 1px solid var(--gray-color);
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  padding: 0 45px;
  margin: 0 auto;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex: 1 1;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const HeaderLeftSide = styled.div`
  flex: 1 1;
`;

const Alignment = styled.div`
  display: flex;
  justify-content: center;
  flex: 1 1;
`;

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export default function HeaderComponents() {
  return (
    <>
      <BunnerComponents />
      <Header>
        <HeaderContent>
          <HeaderLeftSide>
            <LogoIcon />
          </HeaderLeftSide>
          <Alignment>
            <HeaderInput />
          </Alignment>
          <HeaderDiv>
            <Button>
              <GlobeIcon />
            </Button>
            <P>nginep site</P>
            <HeaderButton />
          </HeaderDiv>
        </HeaderContent>
      </Header>
    </>
  );
}
