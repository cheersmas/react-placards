import type { FC, RefObject } from 'react';
import React from 'react';

import type { Item } from '../../types/components/Notification.types';

const Card: FC<{
  item: Item;
  cardRef: RefObject<HTMLLIElement>;
}> = ({ cardRef, item: { id, title, heading, description } }) => (
  <li key={id} ref={cardRef}>
    <section>
      <h2>
        {title} - <span>{heading}</span>
      </h2>
      <p>{description}</p>
    </section>
  </li>
);

export default Card;
