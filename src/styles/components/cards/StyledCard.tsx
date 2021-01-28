/* eslint-disable max-lines */
import styled, { css } from 'styled-components';

import {
  calculateClip,
  DEFAULT_DELAY,
  DEFAULT_DURATION,
  DEFAULT_EASING,
  setTransition
} from '../../../utils/styles/cards';

const StyledCard = styled.li<{
  offsetheight: number;
  rotatingindicies: number[];
  heights: number[];
}>`
  ${({ rotatingindicies, heights, offsetheight }) => css`
    background-color: rgb(255, 255, 255);
    filter: blur(100px);
    left: 0;
    opacity: 0;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transform: perspective(100px) translate3d(0, -${offsetheight + 400}px, 80px);
    transform-origin: 50% ${offsetheight}px;
    transition: ${settransition(default_duration,
    'ease-in-out',
    default_delay)};
    z-index: 5;
    &:nth-child(${rotatingindicies[0] + 1}) {
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
      filter: blur(0);
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition: ${settransition(default_duration,
      default_easing,
      default_delay)};
      visibility: visible;
      z-index: 4;
    }
    &:nth-child(${rotatingindicies[1] + 1}) {
      background: #e2e7ed;
      clip-path: ${calculateclip(offsetheight, heights[rotatingindicies[1]])};
      color: #e2e7ed;
      filter: blur(0);
      opacity: 1;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[1]] + 20}px,
        -10px);
      transition: ${settransition(default_duration, default_easing, 200)},
        clip-path 5000ms linear;
      visibility: visible;
      z-index: 3;
    }
    &:nth-child(${rotatingindicies[2] + 1}) {
      background-color: #fafafa;
      clip-path: ${calculateclip(offsetheight, heights[rotatingindicies[2]])};
      color: #fafafa;
      filter: blur(0);
      opacity: 1;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[2]] + 40}px,
        -20px);
      transition: ${settransition(default_duration, default_easing, 300)};
      visibility: visible;
      z-index: 2;
    }
    &:nth-child(${rotatingindicies[3] + 1}) {
      background-color: #fafafa;
      color: #fafafa;
      filter: blur(0);
      opacity: 0;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[3]] + 65}px,
        -30px);
      transition: ${settransition(default_duration, default_easing, 400)};
      visibility: visible;
      z-index: 1;
    }
  `}
`;

export default StyledCard;
