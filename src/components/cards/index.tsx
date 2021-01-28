import type { FC } from 'react';
import React from 'react';
import type { Item } from 'src/types/components/Notification.types';
import type {
  CardStyleConfiguration,
  StackCardsStyleConfiguration
} from 'src/types/Configuration.types';

import useRefsMeasurements from '../../hooks/useRefsMeasurements';
import useTraversingArray from '../../hooks/useTraversingArray';
import StyledCardContainer from '../../styles/components/cards/StyledCardContainer';
import Card from './Card';

type CardsProps = {
  items?: Item[];
  timing?: number;
  cardStyle?: CardStyleConfiguration;
  stackCardStyles?: StackCardsStyleConfiguration;
};

const Cards: FC<CardsProps> = ({
  items,
  timing,
  cardStyle,
  stackCardStyles
}) => {
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
        stackCardStyles={stackCardStyles}
      >
        {items?.map((item, index) => (
          <Card cardRef={cardRefs[index]} item={item} key={item.id} />
        ))}
      </StyledCardContainer>
    </>
  );
};

export default Cards;
