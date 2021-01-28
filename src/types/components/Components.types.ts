import type { ReactElement, RefObject } from 'react';

import type {
  CardStyleConfiguration,
  StackCardsStyleConfiguration
} from '../Configuration.types';

export type Item = {
  id?: string;
  content: string | ReactElement;
};
export type CardsProps = {
  items?: Item[];
  timing?: number;
  cardStyle?: CardStyleConfiguration;
  stackCardStyles?: StackCardsStyleConfiguration;
};

export type CardProps = {
  item: Item;
  cardRef: RefObject<HTMLLIElement>;
};
