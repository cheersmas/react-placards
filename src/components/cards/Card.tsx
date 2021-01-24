import type { FC, Ref, RefObject } from 'react';
import React from 'react';

import StyledCard from '../../styles/components/cards/StyledCard';
import type { Item } from '../../types/components/Notification.types';

const Card: FC<{
  current: number;
  rotatingIndicies: number[];
  item: Item;
  cardRef: RefObject<HTMLLIElement>;
}> = ({ current, item: { id, text }, rotatingIndicies, cardRef }) => (
  <StyledCard
    data-index={current}
    data-rotating-index={rotatingIndicies[current]}
    id={id}
    ref={cardRef}
    // rotatingIndicies={[3, 4, 0, 1, 2]}
    rotatingIndicies={rotatingIndicies}
  >
    <div>{text}</div>
  </StyledCard>
);

export default Card;
