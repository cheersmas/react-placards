import type { FC } from 'react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyles';
import themes from '../styles/themes.json';
import type { GlobalStyledWrapperProps } from '../types/components/GlobalStyles.types';

const GlobalStyledWrapper: FC<GlobalStyledWrapperProps> = ({
  children,
  theme = themes.default
}) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default GlobalStyledWrapper;
