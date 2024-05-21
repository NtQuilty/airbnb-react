import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType } from 'embla-carousel';
import styled from 'styled-components';
import PrevButtonIcon from '../../assets/carousel/prev-button.svg?react';
import NextButtonIcon from '../../assets/carousel/next-button.svg?react';

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  touch-action: manipulation;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid var(--gray-color);
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  z-index: 1;
  border-radius: 50%;
  color: var(--text-body);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 2px 0px #22222240;
`;

interface UsePrevNextButtonsProps {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsProps => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>;

export const PrevButton: React.FC<PropType> = () => {
  return (
    <Button type="button">
      <PrevButtonIcon />
    </Button>
  );
};

export const NextButton: React.FC<PropType> = () => {
  return (
    <Button type="button">
      <NextButtonIcon />
    </Button>
  );
};
