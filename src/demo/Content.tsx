import type { FC } from 'react';
import React from 'react';

type ContentTypes = {
  heading?: string;
  date?: string;
  description?: string;
  imgSrc?: string;
  backgroundColor?: string;
};

const Content: FC<ContentTypes> = ({ heading, date, description }) => (
  <div>
    <section className="heading">
      <strong>{heading}</strong> <span>{date}</span>
    </section>
    <p>{description}</p>
  </div>
);

export const ChangingBackground: FC<ContentTypes> = ({
  backgroundColor,
  description
}) => (
  <div
    style={{
      backgroundColor,
      padding: 20
    }}
  >
    <h2>{description}</h2>
  </div>
);

export const MediaContent: FC<ContentTypes> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: 12,
      borderRadius: '56px',
      background: '#fff',
      overflow: 'hidden'
    }}
  >
    {children}
  </div>
);

export default Content;
