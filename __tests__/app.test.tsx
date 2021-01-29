import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Banners } from '../src/components';

afterEach(cleanup);

test('renders hello world', () => {
  const { getByText } = render(<Banners />);
  expect(getByText('Hello world.')).toBeInTheDocument();
});
