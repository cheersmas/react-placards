import styled, { css } from 'styled-components';

const StyledCard = styled.li<{
  offsetHeight?: number;
  rotatingIndicies: number[];
}>`
  ${({ rotatingIndicies }) => css`
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 320px;
    &:nth-child(${rotatingIndicies[4] + 1}) {
      filter: blur(10px);
      opacity: 0;
      position: absolute;
      transform: perspective(700px) translate3d(0, -90%, 300px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 5;
    }
    &:nth-child(${rotatingIndicies[0] + 1}) {
      box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1),
        0 5px 15px rgba(0, 0, 0, 0.07);
      position: absolute;
      transform: perspective(0) translate3d(0, 0, 0);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 4;
    }
    &:nth-child(${rotatingIndicies[1] + 1}) {
      background: #e2e7ed;
      color: #e2e7ed;
      position: absolute;
      transform: perspective(700px) translate3d(0, 20%, -50px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96) 150ms;
      z-index: 3;
    }
    &:nth-child(${rotatingIndicies[2] + 1}) {
      background-color: #fafafa;
      color: #fafafa;
      position: absolute;
      transform: perspective(700px) translate3d(0, 40%, -100px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96) 250ms;
      z-index: 2;
    }
    &:nth-child(${rotatingIndicies[3] + 1}) {
      opacity: 0;
      position: absolute;
      transform: perspective(700px) translate3d(0, 60%, -150px);
      transition: all 1000ms cubic-bezier(0.19, 0.49, 0.46, 0.96);
      z-index: 1;
    }
  `}
`;

export default StyledCard;
