import type { ReactElement } from 'react';
import React from 'react';

import GlobalContextProvider from './GlobalContext';
import GlobalStyledWrapper from './GlobalStyledWrapper';

function ReactNotification(): ReactElement {
  return (
    <GlobalContextProvider name="test">
      <GlobalStyledWrapper>
        <div>Hello World</div>
      </GlobalStyledWrapper>
    </GlobalContextProvider>
  );
}

export default ReactNotification;
