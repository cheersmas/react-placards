import type { Item } from './components/Notification.types';

export type CardStyleConfiguration = {
  padding?: string;
  boxShadow?: string;
  borderRadius?: string;
  backgroundColor?: string;
};
export type Configuration = {
  items?: Item[];
  width?: number;
  timing?: number;
  cardStyle?: CardStyleConfiguration;
};
