import type { FC, ReactElement } from 'react';
import React from 'react';

import type { Configuration } from '../types/Configuration.types';

export const Content = ({ heading, date, description }): ReactElement => (
  <div style={{ fontSize: 14 }}>
    <strong>{heading}</strong> <span>{date}</span>
    <p>{description}</p>
  </div>
);

export const configuration: Configuration = {
  items: [
    {
      id: 'content-types',
      content: (
        <Content
          heading="Content Types"
          date="12-12-2020"
          description="You can pass in a string or a component."
        />
      )
    },
    {
      id: 'custom-components',
      content: (
        <Content
          heading="Custom Components"
          date="13-12-2020"
          description="You can create your own custom components"
        />
      )
    },
    {
      id: 'editing-first-card',
      content: (
        <Content
          heading="Editing First Card"
          date="01-04-2021"
          description="You can format the style of current card."
        />
      )
    },
    {
      id: 'text-value',
      content: 'You can pass in a plain text string too.'
    }
  ],
  width: 600,
  height: 400,
  timing: 7000,
  cardStyles: {
    borderRadius: '4px',
    padding: '32px'
  },
  stackCardStyles: {
    secondColor: '#fefe',
    thirdColor: '#efef'
  }
};

export default configuration;
