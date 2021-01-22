export type Item = {
  id: string;
  text: string;
};
export type ReactNotificationType = {
  items?: Item[];
  children?: React.ReactElement | React.ReactElement[];
};
