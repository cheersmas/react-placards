import type { ReactElement } from 'react';
import React from 'react';

import useGenerateArray from '../hooks/useGenerateArray';
import type { Configuration } from '../types/Configuration.types';
import Cards from './cards';
import GlobalContextProvider from './GlobalContext';
import GlobalStyledWrapper from './GlobalStyledWrapper';

function ReactNotification({
  width,
  items,
  timing
}: Configuration): ReactElement {
  const newItems = useGenerateArray(items, 5);
  return (
    <GlobalContextProvider width={width} items={newItems} timing={timing}>
      <GlobalStyledWrapper>
        <div style={{ width }}>
          <Cards>
            <div>one</div>
            <div>two</div>
            <div>three</div>
          </Cards>
        </div>
      </GlobalStyledWrapper>
    </GlobalContextProvider>
  );
}

export default ReactNotification;
