import type { ReactElement } from 'react';
import React from 'react';

import type { Configuration } from '../types/Configuration.types';
import Cards from './cards';
import GlobalContextProvider from './GlobalContext';
import GlobalStyledWrapper from './GlobalStyledWrapper';

function ReactNotification({
  width,
  items,
  timing
}: Configuration): ReactElement {
  return (
    <GlobalContextProvider width={width} items={items} timing={timing}>
      <GlobalStyledWrapper>
        <div style={{ width }}>
          <Cards />
        </div>
      </GlobalStyledWrapper>
    </GlobalContextProvider>
  );
}

export default ReactNotification;
