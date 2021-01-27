/* eslint-disable camelcase */
/* stylelint-disable */
import styled, { css } from 'styled-components';

const default_duration = 1000;
const default_easing = 'cubic-bezier(0.19, 0.49, 0.46, 0.96)';
const default_delay = 0;
const settransition = (duration: number, easing: string, delay: number) =>
  `all ${duration}ms ${easing} ${delay}ms`;
const StyledCard = styled.li<{
  offsetheight: number;
  rotatingindicies: number[];
  heights: number[];
}>`
  ${({ rotatingindicies, heights, offsetheight }) => css`
    background-color: rgb(255, 255, 255);
    left: 0;
    opacity: 0;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transform: perspective(100px)
      translate3d(0,
      ${offsetheight - heights[rotatingindicies[4]] - 100}px,
      40px);
    transform-origin: 50% ${offsetheight}px;
    transition: ${settransition(500, 'linear', default_delay)};
    z-index: 6;
    &:nth-child(${rotatingindicies[0] + 1}) {
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
      opacity: 1;
      transform: translate3d(0, 0, 0);
      transition: ${settransition(1000, default_easing, 100)};
      visibility: visible;
      z-index: 4;
    }
    &:nth-child(${rotatingindicies[1] + 1}) {
      background: #e2e7ed;
      clip-path: inset(50% 0 0 0);
      color: #e2e7ed;
      opacity: 1;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[1]] + 20}px,
        -10px);
      transition: ${settransition(1000, default_easing, 200)};
      visibility: visible;
      z-index: 3;
    }
    &:nth-child(${rotatingindicies[2] + 1}) {
      background-color: #fafafa;
      clip-path: inset(50% 0 0 0);
      color: #fafafa;
      opacity: 1;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[2]] + 40}px,
        -20px);
      transition: ${settransition(1000, default_easing, 300)};
      visibility: visible;
      z-index: 2;
    }
    &:nth-child(${rotatingindicies[3] + 1}) {
      opacity: 0;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[3]] + 65}px,
        -30px);
      transition: ${settransition(1000, default_easing, 400)};
      visibility: visible;
      z-index: 1;
    }
  `}
`;

export default StyledCard;
