import type { FC } from 'react';
import React, { useEffect, useRef } from 'react';

import StyledCard from '../../styles/components/cards/StyledCard';
import type { Item } from '../../types/components/Notification.types';

const Card: FC<{ rotatingIndicies: number[]; item: Item }> = ({
  rotatingIndicies,
  item: { id, text }
}) => {
  const cardRef = useRef(null);
  useEffect(() => {
    // console.log(cardRef.current);
  }, [rotatingIndicies]);

  return (
    <StyledCard ref={cardRef} rotatingIndicies={rotatingIndicies} id={id}>
      <div>{text}</div>
    </StyledCard>
  );
};
export default Card;
