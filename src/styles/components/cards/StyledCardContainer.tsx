/* eslint-disable max-lines */
import type { CardStyleConfiguration } from 'src/types/Configuration.types';
import styled, { css } from 'styled-components';

import {
  calculateClip,
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_EASING,
  setTransition
} from '../../../utils/styles/cards';

const StyledCardContainer = styled.ul<{
  initial: boolean;
  offsetheight: number;
  rotatingindicies: number[];
  heights: number[];
  cardStyle?: CardStyleConfiguration;
}>`
  ${({ rotatingindicies, initial, heights, offsetheight, cardStyle }) => css`
    list-style: none;
    position: relative;

    * {
      transition: ${initial && 'none !important'};
    }

    li {
      background-color: rgb(255, 255, 255);
      border-radius: ${cardStyle?.borderRadius || '4px'};
      filter: blur(100px);
      left: 0;
      opacity: 0;
      padding: ${cardStyle?.padding || 0};
      position: absolute;
      right: 0;
      top: 0;
      transform: perspective(100px)
        translate3d(0, -${offsetheight + 400}px, 80px);
      transform-origin: 50% ${offsetheight}px;
      transition: ${setTransition(DEFAULT_DURATION,
      'ease-in-out',
      DEFAULT_DELAY)};
      z-index: 6;
      &:nth-child(${rotatingindicies[0] + 1}) {
        box-shadow: ${cardStyle?.boxShadow ||
          '0 15px 35px rgba(50, 50, 93, 0.1),0 5px 15px rgba(0, 0, 0, 0.07)'};
        filter: blur(0);
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: ${setTransition(DEFAULT_DURATION,
        DEFAULT_EASING,
        DEFAULT_DELAY)};
        z-index: 4;
      }
      &:nth-child(${rotatingindicies[1] + 1}) {
        background: #e2e7ed;
        clip-path: ${calculateClip(offsetheight, heights[rotatingindicies[1]])};
        color: #e2e7ed;
        filter: blur(0);
        opacity: 1;
        transform: perspective(100px)
          translate3d(0,
          ${offsetheight - heights[rotatingindicies[1]] + 30}px,
          -10px);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 200)},
          clip-path 400ms linear;
        z-index: 3;
      }
      &:nth-child(${rotatingindicies[2] + 1}) {
        background-color: #fafafa;
        background-size: cover;
        clip-path: ${calculateClip(offsetheight, heights[rotatingindicies[2]])};
        color: #fafafa;
        filter: blur(0);
        opacity: 1;
        transform: perspective(100px)
          translate3d(0,
          ${offsetheight - heights[rotatingindicies[2]] + 60}px,
          -20px);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 300)};
        z-index: 2;
      }
      &:nth-child(${rotatingindicies[3] + 1}) {
        background-color: #fafafa;
        color: #fafafa;
        filter: blur(0);
        opacity: 0;
        transform: perspective(100px)
          translate3d(0,
          ${offsetheight - heights[rotatingindicies[3]] + 90}px,
          -30px);
        transition: ${setTransition(DEFAULT_DURATION, DEFAULT_EASING, 400)};
        z-index: 1;
      }
    }
  `}
`;

export default StyledCardContainer;
