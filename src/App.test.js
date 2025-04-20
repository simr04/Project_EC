import { render, screen } from '@testing-library/react';
import App from './App';

test('renders group number and all team members', () => {
  render(<App />);
  expect(screen.getByText(/Group 16/i)).toBeInTheDocument();
  expect(screen.getByText(/Simranjot Kaur Brar/i)).toBeInTheDocument();
  
});
