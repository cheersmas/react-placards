import type { ReactElement } from 'react';
import React from 'react';

import items from '../data/data';
import Cards from './cards';
import GlobalContextProvider from './GlobalContext';
import GlobalStyledWrapper from './GlobalStyledWrapper';

function ReactNotification(): ReactElement {
  return (
    <GlobalContextProvider items={items}>
      <GlobalStyledWrapper>
        <Cards />
      </GlobalStyledWrapper>
    </GlobalContextProvider>
  );
}

export default ReactNotification;
