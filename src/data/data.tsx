import React from 'react';

import type { Configuration } from '../types/Configuration.types';

export const Home = () => (
  <div
    style={{
      padding: 10,
      backgroundColor: '#000'
    }}
  >
    Hello World!
  </div>
);

export const configuration: Configuration = {
  items: [
    {
      content: 'This is a text content!'
    },
    {
      content: <Home />
    },
    {
      content: <Home />
    },
    {
      content: <Home />
    },
    {
      content: <Home />
    }
  ],
  width: 400,
  height: 400,
  timing: 2000,
  cardStyle: {
    borderRadius: '4px',
    padding: '20px'
  }
};
export default configuration;
