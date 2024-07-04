import React from 'react';
import { render, screen, findByText } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
