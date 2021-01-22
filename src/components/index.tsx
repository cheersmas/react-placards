import type { ReactElement } from 'react';
import React from 'react';

import GlobalStyledWrapper from './GlobalStyledWrapper';

function ReactNotification(): ReactElement {
  return (
    <GlobalStyledWrapper>
      <div>Hello World</div>
    </GlobalStyledWrapper>
  );
}

export default ReactNotification;
