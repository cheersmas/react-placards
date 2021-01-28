import type { ReactElement } from 'react';

export type Item = {
  id?: string;
  content: string | ReactElement;
};

export type ReactNotificationType = {
  items?: Item[];
  children?: React.ReactElement | React.ReactElement[];
};
