import type { FC } from 'react';
import React, { useContext } from 'react';

import useIndicies from '../../hooks/useRotatingIndicies';
import StyledCardContainer from '../../styles/components/cards/StyledCardContainer';
import { GlobalContext } from '../GlobalContext';
import Card from './Card';

const Cards: FC = () => {
  const { items } = useContext(GlobalContext);
  const rotatingIndicies = useIndicies();
  console.log(rotatingIndicies);
  return (
    <StyledCardContainer>
      {items?.reverse().map((item) => (
        <Card rotatingIndicies={rotatingIndicies} key={item.id} item={item} />
      ))}
    </StyledCardContainer>
  );
};

export default Cards;
