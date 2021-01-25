import styled, { css } from 'styled-components';

const StyledCard = styled.li<{
  offsetheight: number;
  rotatingindicies: number[];
  heights: number[];
}>`
  ${({ rotatingindicies, heights, offsetheight }) => css`
    background-color: rgb(255, 255, 255);
    left: 0;
    padding: 20px;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: 50% ${offsetheight}px;
    &:nth-child(${rotatingindicies[4] + 1}) {
      filter: blur(10px);
      opacity: 0;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[4]] - 200}px,
        40px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 5;
    }
    &:nth-child(${rotatingindicies[0] + 1}) {
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
      transform: translate3d(0, 0, 0);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 4;
    }
    &:nth-child(${rotatingindicies[1] + 1}) {
      background: #e2e7ed;
      clip-path: inset(50% 0 0 0);
      color: #e2e7ed;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[1]] + 20}px,
        -10px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 3;
    }
    &:nth-child(${rotatingindicies[2] + 1}) {
      background-color: #fafafa;
      color: #fafafa;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[2]] + 40}px,
        -20px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 2;
    }
    &:nth-child(${rotatingindicies[3] + 1}) {
      opacity: 0;
      transform: perspective(100px)
        translate3d(0,
        ${offsetheight - heights[rotatingindicies[3]] + 65}px,
        -30px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 1;
    }
  `}
`;

export default StyledCard;
