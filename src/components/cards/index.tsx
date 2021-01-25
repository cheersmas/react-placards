import type { FC } from 'react';
import React, { useContext } from 'react';

import useRefsMeasurements from '../../hooks/useRefsMeasurements';
import useIndicies from '../../hooks/useRotatingIndicies';
import StyledCardContainer from '../../styles/components/cards/StyledCardContainer';
import { GlobalContext } from '../GlobalContext';
import Card from './Card';

const Cards: FC = () => {
  const { items } = useContext(GlobalContext);
  const [current, updateCounter, rotatingIndicies] = useIndicies();
  const [cardRefs, measurements] = useRefsMeasurements<HTMLLIElement>(5);
  return (
    <>
      <StyledCardContainer>
        {items?.map((item, index) => (
          <Card
            current={current}
            cardRef={cardRefs[index]}
            offsetheight={measurements[current]?.offsetHeight}
            heights={measurements.map((i) => i.offsetHeight)}
            item={item}
            key={item.id}
            rotatingIndicies={rotatingIndicies}
          />
        ))}
      </StyledCardContainer>
    </>
  );
};

export default Cards;
