import React, { useState } from 'react';
import { PrevButton, NextButton } from '../MediaCarousel/CarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';
import { Icon } from './styled';
import { EmblaOptionsType } from 'embla-carousel';
import { usePrevNextButtons } from '../MediaCarousel/hook';

interface PropType {
  slides: Icon[];
  options?: EmblaOptionsType;
}

const VacationFilterCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [activeIcon, setActiveIcon] = useState<number>(0);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <CarouselWrapper>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <CarouselVisible ref={emblaRef}>
        <CarouselContainer>
          {slides.map((icon, index) => {
            const Icon = <icon.src />;
            return (
              <VacationChoiceButton
                key={icon.label}
                onClick={() => setActiveIcon(index)}
                isActive={activeIcon === index}
              >
                {Icon}
                <Label>{icon.label}</Label>
              </VacationChoiceButton>
            );
          })}
        </CarouselContainer>
      </CarouselVisible>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </CarouselWrapper>
  );
};

export default VacationFilterCarousel;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 45px 20px;
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
`;
