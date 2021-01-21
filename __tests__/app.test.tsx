import React from 'react'
import { render, cleanup } from "@testing-library/react"
import App from '../src/App'

afterEach(cleanup)

test('renders hello world', () => {
  const { getByText } = render(<App />)
  expect(getByText('Hello world.')).toBeInTheDocument();
})
