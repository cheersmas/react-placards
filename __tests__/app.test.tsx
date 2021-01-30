import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Placards } from '../src/react-placards';

afterEach(cleanup);

test('renders hello world', () => {
  const { getByText } = render(<Placards />);
  expect(getByText('Hello world.')).toBeInTheDocument();
});
