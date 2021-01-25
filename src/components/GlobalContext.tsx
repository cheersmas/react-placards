import type { FC } from 'react';
import React, { createContext } from 'react';

import type { Configuration } from '../types/Configuration.types';

// - TODO - decide to use one of (1) or (2)
// (1). use in hooks
export const GlobalContext = createContext<Configuration>({});

const GlobalContextProvider: FC<Partial<Configuration>> = ({
  children,
  ...rest
}) => <GlobalContext.Provider value={rest}>{children}</GlobalContext.Provider>;
// (2). use as render props
export const GlobalContextConsumer = GlobalContext.Consumer;
export default GlobalContextProvider;
