import type { FC } from 'react';
import React, { useContext } from 'react';

import useRefsMeasurements from '../../hooks/useRefsMeasurements';
import useTraversingArray from '../../hooks/useTraversingArray';
import StyledCardContainer from '../../styles/components/cards/StyledCardContainer';
import { GlobalContext } from '../GlobalContext';
import Card from './Card';

const Cards: FC = ({ children }) => {
  const { items, timing } = useContext(GlobalContext);
  const { currentArray } = useTraversingArray(items || [], 5, timing);
  const [cardRefs, measurements] = useRefsMeasurements<HTMLLIElement>(
    items?.length || 5
  );
  return (
    <>
      <StyledCardContainer>
        {items?.map((item, index) => (
          <Card
            current={currentArray[0]}
            cardRef={cardRefs[index]}
            offsetheight={measurements[currentArray[0]]?.offsetHeight}
            heights={measurements.map((i) => i.offsetHeight)}
            item={item}
            key={item.id}
            rotatingIndicies={currentArray}
          />
        ))}
      </StyledCardContainer>
    </>
  );
};

export default Cards;
