import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the CarePath home screen', () => {
  render(<App />);
  expect(screen.getByText(/How can we help today/i)).toBeInTheDocument();
});
