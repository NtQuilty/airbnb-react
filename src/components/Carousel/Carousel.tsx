import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './CarouselArrowButton';
import useEmblaCarousel from 'embla-carousel-react';
import './style.css';
import styled from 'styled-components';

const DivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 105px;
`;

const DivHidden = styled.div`
  overflow: hidden;
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
  justify-content: flex-end;
  margin-right: 20px;
  margin-left: 20px;
`;

const IconButton = styled.button`
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
`;

const IconText = styled.p`
  padding-top: 13px;
`;

interface Icon {
  title: string;
  src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

type PropType = {
  slides: Icon[];
  options?: EmblaOptionsType;
};

const CarouselComponents: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  const Console = () => {
    console.log('Stegsid');
  };

  return (
    <DivFlex>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <DivHidden ref={emblaRef}>
        <CarouselContainer>
          {slides.map((icon) => (
            <IconButton key={icon.title} onClick={Console}>
              <IconSlide>
                <icon.src />
                <IconText>{icon.title}</IconText>
              </IconSlide>
            </IconButton>
          ))}
        </CarouselContainer>
      </DivHidden>
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </DivFlex>
  );
};

export default CarouselComponents;
