import type { CSSProperties } from 'react';

import type { Item } from './components/Components.types';

export type CardStyleConfiguration = {
  padding?: string;
  boxShadow?: string;
  borderRadius?: string;
  backgroundColor?: string;
};

export type StackCardsStyleConfiguration = {
  secondColor?: string;
  thirdColor?: string;
};

export type Configuration = {
  items: Item[];
  width: number | string;
  height: number | string;
  containerStyles?: CSSProperties;
  timing?: number;
  cardStyles?: CardStyleConfiguration;
  stackCardStyles?: StackCardsStyleConfiguration;
};
