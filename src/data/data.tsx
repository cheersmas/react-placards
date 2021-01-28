import React from 'react';

import type { Configuration } from '../types/Configuration.types';

export const Home = () => <div>Hello World!</div>;

export const configuration: Configuration = {
  items: [
    {
      title: 'one',
      heading: 'one',
      description:
        'one is the text of the body andis the text of the body andis the text of the body andis the text of the body andis the text of the body and we have thsi to show'
    },
    {
      title: 'two',
      heading: 'two',
      description:
        'two is this the text of the body and body and we have thsi to show'
    },
    {
      title: 'three',
      heading: 'three',
      description: 'three is the text of the body and we have thsi to show'
    },
    {
      title: 'four',
      heading: 'four',
      description:
        'four is the text ois the texis thhe texis thhe texis the text of the body andt of the body and nd we have thsi to show'
    },
    {
      title: 'five',
      heading: 'five',
      description: 'five is the text of the body and we have thsi to show'
    },
    {
      title: 'six',
      heading: 'six',
      description:
        'six is thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis thhe texis th to show'
    }
  ],
  width: 400,
  timing: 5000
};
export default configuration;
