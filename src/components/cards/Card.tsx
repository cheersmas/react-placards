import type { FC, RefObject } from 'react';
import React from 'react';

import StyledCard from '../../styles/components/cards/StyledCard';
import type { Item } from '../../types/components/Notification.types';

const Card: FC<{
  current: number;
  rotatingIndicies: number[];
  item: Item;
  offsetheight: number;
  heights: number[];
  cardRef: RefObject<HTMLLIElement>;
}> = ({
  cardRef,
  current,
  item: { id, text },
  offsetheight,
  rotatingIndicies,
  heights
}) => (
  <StyledCard
    data-rotating-index={rotatingIndicies[current]}
    id={id}
    ref={cardRef}
    offsetheight={offsetheight}
    rotatingindicies={rotatingIndicies}
    heights={heights}
  >
    <div>{text}</div>
  </StyledCard>
);

export default Card;
