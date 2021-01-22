import type { FC } from 'react';
import React from 'react';

import StyledCard from '../../styles/components/cards/StyledCard';
import type { Item } from '../../types/components/Notification.types';

const Card: FC<{ array: number[]; item: Item }> = ({
  array,
  item: { id, text }
}) => (
  <StyledCard array={array} id={id}>
    <div>{text}</div>
  </StyledCard>
);

export default Card;
