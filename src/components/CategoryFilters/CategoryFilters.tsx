import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';
import { IconType, ICON_SET } from '../../config';
import PrevButtonIcon from '../../assets/carousel/prevButton.svg?react';
import NextButtonIcon from '../../assets/carousel/nextButton.svg?react';

export const CategoryFilters = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <CarouselWrapper>
      <PrevNextButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
        <PrevButtonIcon />
      </PrevNextButton>
      <CarouselVisible ref={emblaRef}>
        <CarouselContainer>
          {ICON_SET.map((icon: IconType, index) => {
            const Icon = icon.component;
            return (
              <VacationChoiceButton
                key={icon.label}
                onClick={() => setActiveIcon(index)}
                isActive={activeIcon === index}
              >
                <Icon />
                <Label>{icon.label}</Label>
              </VacationChoiceButton>
            );
          })}
        </CarouselContainer>
      </CarouselVisible>
      <PrevNextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
        <NextButtonIcon />
      </PrevNextButton>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 45px 0px;
  max-width: 1350px;
  margin: 0 auto;
`;

const CarouselVisible = styled.div`
  overflow: hidden;
`;

const CarouselContainer = styled.div`
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
  backface-visibility: hidden;
`;

const VacationChoiceButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-left: 15px;
  margin-right: 15px;
  width: 100px;
  background: none;
  border: none;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  padding: 0;
  color: ${({ isActive }) => (isActive ? 'var(--black)' : 'var(--light-gray)')};
  border-bottom: 2px solid ${({ isActive }) => (isActive ? 'var(--black)' : 'transparent')};
  svg {
    fill: ${({ isActive }) => (isActive ? 'var(--black)' : 'var(--light-gray)')};
  }
  &:active {
    transform: translateY(0.9px);
    box-shadow: 0 1px #666;
  }
  &:hover {
    color: ${({ isActive }) => (isActive ? 'var(--black)' : 'var(--button-hover-fill)')};
    border-bottom: 2px solid
      ${({ isActive }) => (isActive ? 'var(--black)' : 'var(--button-hover-fill)')};
  }
  &:hover svg {
    fill: ${({ isActive }) => (isActive ? 'var(--black)' : 'var(--button-hover-fill)')};
  }
`;

const Label = styled.span`
  padding: 13px 0 16px;
  font-size: 12px;
  white-space: nowrap;
`;

const PrevNextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--gray);
  padding: 9px;
  z-index: 1;
  border-radius: 50%;
  box-shadow: 0px 0px 2px 0px var(--box-shadow);
`;
