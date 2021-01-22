import type { FC } from 'react';
import React, { useContext } from 'react';

import useRotatingArray from '../../hooks/useRotatingArray';
import StyledCardContainer from '../../styles/components/cards/StyledCardContainer';
import { GlobalContext } from '../GlobalContext';
import Card from './Card';

const Cards: FC = () => {
  const { items } = useContext(GlobalContext);
  const array = useRotatingArray(5, 2000);
  return (
    <StyledCardContainer>
      {items?.map((item) => (
        <Card array={array} key={item.id} item={item} />
      ))}
    </StyledCardContainer>
  );
};

export default Cards;
