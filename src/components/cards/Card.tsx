import type { FC } from 'react';
import React from 'react';

import type { CardProps } from '../../types/components/Components.types';

const Card: FC<CardProps> = ({ cardRef, item: { id, content } }) => (
  <li key={id} ref={cardRef}>
    <section>{content}</section>
  </li>
);

export default Card;
