import type { ReactElement } from 'react';
import React from 'react';

import useGenerateArray from '../hooks/useGenerateArray';
import type { Configuration } from '../types/Configuration.types';
import Cards from './cards';

function ReactNotification({
  width,
  items,
  ...rest
}: Configuration): ReactElement {
  const newItems = useGenerateArray(items, 5);
  return (
    <div style={{ width }}>
      <Cards {...{ items: newItems, ...rest }} />
    </div>
  );
}

export default ReactNotification;
