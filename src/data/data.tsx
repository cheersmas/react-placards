import React from 'react';

import type { Configuration } from '../types/Configuration.types';

export const Home = () => (
  <div
    style={{
      padding: 10
    }}
  >
    <h1>Payments</h1>
    <p>partho fethaoesuaotheusaoetuh</p>
  </div>
);

export const configuration: Configuration = {
  items: [
    {
      id: 'one',
      content: 'This is a text content!'
    },
    {
      id: 'two',
      content: <Home />
    },
    {
      id: 'three',
      content: <Home />
    },
    {
      id: 'four',
      content: <Home />
    },
    {
      id: 'five',
      content: <Home />
    },
    {
      id: 'six',
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
