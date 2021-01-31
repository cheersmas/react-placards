/* eslint-disable max-lines */
import styled, { css } from 'styled-components';

import type {
  CardStyleConfiguration,
  StackCardsStyleConfiguration
} from '../../../types/Configuration.types';
import {
  calculateClip,
  DEFAULT_DURATION,
  DEFAULT_EASING,
  insertAfter,
  resetStyles,
  setTransition
} from '../../../utils/styles/cards';

export type StyledCardContainerProps = {
  initial: boolean;
  offsetheight: number;
  rotatingindicies: number[];
  heights: number[];
  cardStyles?: CardStyleConfiguration;
  stackCardStyles?: StackCardsStyleConfiguration;
};

const StyledCardContainer = styled.ul<StyledCardContainerProps>`
  ${({
    rotatingindicies,
    initial,
    heights,
    offsetheight,
    cardStyles,
    stackCardStyles
  }) => css`
    box-sizing: content-box;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;

    * {
      transition: ${initial && 'none !important'};
    }

    li {
      background-color: ${cardStyles?.backgroundColor || 'rgb(255, 255, 255)'};
      border-radius: ${`${cardStyles?.borderRadius}` || '4px'};
      box-sizing: border-box;
      padding: ${cardStyles?.padding || '20px'};
      position: absolute;
      transform: scale(1.2) translateY(-${offsetheight}px);
      transform-origin: 50% ${offsetheight}px;
      transition: all 1000ms, opacity 500ms;
      width: 100%;
      z-index: 6;
      ${resetStyles(10, 0)}
      &:nth-child(${rotatingindicies[0] + 1}) {
        box-shadow: ${cardStyles?.boxShadow ||
          '0 15px 35px rgba(50, 50, 93, 0.1),0 5px 15px rgba(0, 0, 0, 0.07)'};
        clip-path: inset(-100% -100% -100% -100%);
        overflow: hidden;
        transform: translate3d(0, 0, 0);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 200)};
        z-index: 4;
        ${resetStyles()}
        ${insertAfter()}
      }
      &:nth-child(${rotatingindicies[1] + 1}) {
        clip-path: ${calculateClip(offsetheight, heights[rotatingindicies[1]])};
        overflow: hidden;
        transform: perspective(100px)
          translate3d(0,
          ${offsetheight - heights[rotatingindicies[1]] + 30}px,
          -10px);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 400)};
        z-index: 3;
        ${resetStyles()}
        ${insertAfter(stackCardStyles?.secondColor || '#f0f0f0')}
      }
      &:nth-child(${rotatingindicies[2] + 1}) {
        clip-path: ${calculateClip(offsetheight, heights[rotatingindicies[2]])};
        overflow: hidden;
        transform: perspective(100px)
          translate3d(0,
          ${offsetheight - heights[rotatingindicies[2]] + 60}px,
          -20px);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 600)};
        z-index: 2;
        ${resetStyles()}
        ${insertAfter(stackCardStyles?.thirdColor || '#e1e1e1')}
      }
      &:nth-child(${rotatingindicies[3] + 1}) {
        transform: perspective(100px)
          translate3d(0,
          ${offsetheight - heights[rotatingindicies[3]] + 90}px,
          -30px);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 800)};
        z-index: 1;
        ${resetStyles(0, 0)}
        ${insertAfter(stackCardStyles?.thirdColor || '#fff')}
      }
    }
  `}
`;

export default StyledCardContainer;
