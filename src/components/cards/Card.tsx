import type { FC, RefObject } from 'react';
import React from 'react';

import type { Item } from '../../types/components/Notification.types';

const Card: FC<{
  item: Item;
  cardRef: RefObject<HTMLLIElement>;
}> = ({ cardRef, item: { id, content } }) => (
  <li key={id} ref={cardRef}>
    <section>{content}</section>
  </li>
);

export default Card;
