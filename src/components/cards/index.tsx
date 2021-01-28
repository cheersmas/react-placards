import type { FC } from 'react';
import React from 'react';
import type { Item } from 'src/types/components/Notification.types';
import type { CardStyleConfiguration } from 'src/types/Configuration.types';

import useRefsMeasurements from '../../hooks/useRefsMeasurements';
import useTraversingArray from '../../hooks/useTraversingArray';
import StyledCardContainer from '../../styles/components/cards/StyledCardContainer';
import Card from './Card';

const Cards: FC<{
  items?: Item[];
  timing?: number;
  cardStyle?: CardStyleConfiguration;
}> = ({ items, timing, cardStyle }) => {
  const { initial, currentArray } = useTraversingArray(items || [], 5, timing);
  const [cardRefs, measurements] = useRefsMeasurements<HTMLLIElement>(
    items?.length || 5
  );
  return (
    <>
      <StyledCardContainer
        initial={initial}
        offsetheight={measurements[currentArray[0]]?.offsetHeight}
        heights={measurements.map((i) => i.offsetHeight)}
        rotatingindicies={currentArray}
        cardStyle={cardStyle}
      >
        {items?.map((item, index) => (
          <Card cardRef={cardRefs[index]} item={item} key={item.id} />
        ))}
      </StyledCardContainer>
    </>
  );
};

export default Cards;
