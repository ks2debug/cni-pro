import { render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe('Utils', () => {
  const result = 1 + 2;
  const expected = 3;
  it(`(1 + 2) should return ${expected} => result ${result}`, () => {
    expect(result).toBe(expected);
  });
});
