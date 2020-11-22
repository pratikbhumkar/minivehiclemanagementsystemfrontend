import { render, screen } from '@testing-library/react';
import Read from './Read/Read';

test('renders learn react link', () => {
  render(<Read />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
