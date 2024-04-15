import { useState } from 'react';
import BunnerIconButton from './BunnerIcon';
import styled from 'styled-components';

const Bunner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background: #f7f7f7;
  height: 70px;
  padding: 10px 0px 0px 0px;
  gap: 10px;
  width: calc(100% + 90px);
  transform: translateX(-45px);
`;

const BunnerText = styled.div`
  font-size: 16px;
`;

export default function BunnerComponents() {
  const [isVisible, setIsVisible] = useState(() => {
    const savedState = localStorage.getItem('bunner');
    return savedState ? JSON.parse(savedState) : true;
  });

  const deleteBunner = () => {
    setIsVisible(false);
    localStorage.setItem('bunner', JSON.stringify(false));
  };

  return (
    <>
      {isVisible && (
        <Bunner>
          <div></div>
          <BunnerText> Hey, Where are you going?</BunnerText>
          <BunnerIconButton src="/close-icon.svg" alt="Close Icon" onClick={deleteBunner} />
        </Bunner>
      )}
    </>
  );
}
