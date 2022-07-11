import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders card without information', () => {
  render(<Card />);

  const name = screen.getByTestId('card-name');
  const type = screen.getByTestId('card-type');
  const price = screen.getByTestId('card-price');

  expect(name.textContent.trim()).toBe('');
  expect(type.textContent.trim()).toBe('');
  expect(price.textContent.trim()).toBe('');
});

test('renders card with information', () => {
  render(<Card name="mouse xpto" type="mouse" price="99$" />);

  const name = screen.getByTestId('card-name');
  const type = screen.getByTestId('card-type');
  const price = screen.getByTestId('card-price');

  expect(name.textContent.trim()).toBe('mouse xpto');
  expect(type.textContent.trim()).toBe('mouse');
  expect(price.textContent.trim()).toBe('99$');
});
