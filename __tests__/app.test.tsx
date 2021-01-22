import { cleanup, render } from '@testing-library/react';
import React from 'react';

import App from '../src/components';

afterEach(cleanup);

test('renders hello world', () => {
  const { getByText } = render(<App />);
  expect(getByText('Hello world.')).toBeInTheDocument();
});
