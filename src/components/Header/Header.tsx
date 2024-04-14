import { useEffect, useState } from 'react';
import HidingButton from '../HidingIcon/HidingIcon';
import { Hiding } from './styled';

export default function Header() {
  const [isVisible, setIsVisible] = useState(() => {
    const savedState = localStorage.getItem('hiding');
    return savedState ? JSON.parse(savedState) : true;
  });

  const deleteHiding = () => {
    setIsVisible(false);
    localStorage.setItem('hiding', JSON.stringify(false));
  };

  useEffect(() => {
    localStorage.setItem('hiding', JSON.stringify(isVisible));
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Hiding>
          {' '}
          Hey, Where are you going?
          <HidingButton src="/close-icon.svg" alt="Кнопка убрать" onClick={deleteHiding} />
        </Hiding>
      )}
    </>
  );
}
