import React, { useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import styled from 'styled-components';

const DivFlex = styled.div`
  display: flex;
  align-items: center;
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
`;

const IconSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconButton = styled.button<{ isDark?: boolean }>`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:active {
    transform: translateY(0.9px);
    box-shadow: 0 1px #666;
  }

  & svg > path {
    fill: ${(props) => (props.isDark ? '#3e3e3e' : undefined)};
  }
  color: ${(props) => (props.isDark ? '#3e3e3e' : undefined)};
`;

const IconButtonDark = styled.button`
  width: 100%;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  &:active {
    transform: translateY(0.9px);
    box-shadow: 0 1px #666;
  }

  & svg > path {
    fill: #3e3e3e;
  }
  /* filter: brightness(0) saturate(100%) invert(0%) sepia(6%) saturate(7500%) hue-rotate(359deg)
    brightness(105%) contrast(105%); */
`;

const IconTitle = styled.span`
  padding-top: 13px;
  color: var(--text-color);
`;

interface Icon {
  title: string;
  src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

type PropType = {
  slides: Icon[];
  options?: EmblaOptionsType;
};

const CarouselComponents: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <DivFlex>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <DivHidden ref={emblaRef}>
        <CarouselContainer>
          {slides.map((icon, index) =>
            index === activeIndex ? (
              <IconButtonDark
                key={index}
                onClick={() => setIsActive(true)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => {
                  if (isActive) {
                    handleMouseEnter(index);
                    setIsActive(false);
                  } else {
                    setActiveIndex(null);
                    setIsActive(false);
                  }
                }}
              >
                <IconSlide>
                  <icon.src />
                  <IconTitle>{icon.title}</IconTitle>
                </IconSlide>
              </IconButtonDark>
            ) : (
              <IconButton
                key={icon.title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <IconSlide>
                  <icon.src />
                  <IconTitle>{icon.title}</IconTitle>
                </IconSlide>
              </IconButton>
            ),
          )}
        </CarouselContainer>
      </DivHidden>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </DivFlex>
  );
};

export default CarouselComponents;
