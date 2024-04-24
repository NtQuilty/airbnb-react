import React, { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from '../MediaCarousel/CarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; //
  width: auto;
  height: 105px;
  padding: 0 45px;
`;

const DivHidden = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
  height: 100px;
`;

const IconButton = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  // @media
  margin-right: 20px;
  margin-left: 20px;
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ isActive }) => (isActive ? 'black' : 'var(--text-color)')};
  border-bottom: 2px solid ${({ isActive }) => (isActive ? 'black' : 'transparent')};
  svg {
    fill: ${({ isActive }) => (isActive ? 'black' : '#b8b8b8')};
  }
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:active {
    transform: translateY(0.9px);
    box-shadow: 0 1px #666;
  }
  ${({ isActive }) =>
    !isActive &&
    `
    &:hover {
      color: #717171;
      svg {
        fill: #717171;
      }
      border-bottom: 2px solid #717171;
    }
  `}
`;

const IconTitle = styled.span`
  margin: 13px 0 14px;
`;

interface Icon {
  title: string;
  src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

type PropType = {
  slides: Icon[];
  options?: EmblaOptionsType;
};

const HeaderIconsCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [activeIcon, setActiveIcon] = useState<number>();

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <DivFlex>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <DivHidden ref={emblaRef}>
        <CarouselContainer>
          {slides.map((icon, index) => (
            <IconButton
              key={icon.title}
              onClick={() => setActiveIcon(index)}
              isActive={activeIcon === index}
            >
              <icon.src />
              <IconTitle>{icon.title}</IconTitle>
            </IconButton>
          ))}
        </CarouselContainer>
      </DivHidden>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </DivFlex>
  );
};

export default HeaderIconsCarousel;
