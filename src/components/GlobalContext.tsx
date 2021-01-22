import type { FC } from 'react';
import React, { createContext } from 'react';

import type { ReactNotificationType } from '../types/components/Notification.types';

// - TODO - decide to use one of (1) or (2)
// (1). use in hooks
export const GlobalContext = createContext<ReactNotificationType>({
  name: 'one'
});

const GlobalContextProvider: FC<ReactNotificationType> = ({
  children,
  ...rest
}) => <GlobalContext.Provider value={rest}>{children}</GlobalContext.Provider>;
// (2). use as render props
export const GlobalContextConsumer = GlobalContext.Consumer;
export default GlobalContextProvider;
