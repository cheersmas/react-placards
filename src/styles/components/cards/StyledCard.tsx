import styled, { css } from 'styled-components';

const StyledCard = styled.li<{ array: number[] }>`
  ${({ array }) => css`
    background-color: #eee8aa;
    border-radius: 8px;
    padding: 20px;
    transition: all 100ms linear;
    width: 320px;

    &:nth-child(${array[4] + 1}) {
      opacity: 0;
      position: absolute;
      transform: perspective(700px) translate3d(0, -90%, 300px);
      z-index: 5;
    }

    &:nth-child(${array[3] + 1}) {
      position: absolute;
      transform: perspective(0) translate3d(0, 0, 0);
      z-index: 4;
    }

    &:nth-child(${array[2] + 1}) {
      position: absolute;
      transform: perspective(700px) translate3d(0, 20%, -50px);
      transition-delay: 150ms;
      z-index: 3;
    }

    &:nth-child(${array[1] + 1}) {
      position: absolute;
      transform: perspective(700px) translate3d(0, 40%, -100px);
      transition-delay: 100ms;
      z-index: 2;
    }

    &:nth-child(${array[0] + 1}) {
      opacity: 0;
      position: absolute;
      transform: perspective(700px) translate3d(0, 80%, -150px);
      z-index: 1;
    }
  `}
`;

export default StyledCard;
