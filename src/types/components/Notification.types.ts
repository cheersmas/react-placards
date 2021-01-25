export type Item = {
  id: string;
  heading: string;
  description: string;
  title: string;
};

export type ReactNotificationType = {
  items?: Item[];
  children?: React.ReactElement | React.ReactElement[];
};
