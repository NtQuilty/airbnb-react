import HeaderButton from './HeaderButton';
import HeaderInput from './HeaderInput';
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 90px;
  border-top: 1px solid var(--gray-color);
  border-bottom: 1px solid var(--gray-color);
`;

interface HeaderPicProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  margin?: string;
  width?: string;
  height?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

export const HeaderPic = styled.img<HeaderPicProps>`
  margin: ${(props) => props.margin || '0'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  position: ${(props) => props.position || 'static'};
  top: ${(props) => props.top || 'auto'};
  right: ${(props) => props.right || 'auto'};
  bottom: ${(props) => props.bottom || 'auto'};
  left: ${(props) => props.left || 'auto'};
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
`;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const Alignment = styled.div`
  display: flex;
  justify-content: center;
`;

export default function HeaderComponents() {
  return (
    <Header>
      <HeaderPic src="./logo-icon.svg" width="93px" height="38px" alt="Logo icon" />
      <Alignment>
        <HeaderInput />
      </Alignment>
      <HeaderDiv>
        <HeaderPic src="./globe-icon.svg" alt="Glove icon" />
        <P>nginep site</P>
        <HeaderButton />
      </HeaderDiv>
    </Header>
  );
}
