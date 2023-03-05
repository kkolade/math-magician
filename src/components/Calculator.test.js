import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Calculator from './Calculator';

describe('Calculator', () => {
  afterEach(cleanup);

  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});

test('Calculator handles user input correctly', () => {
  const { getByText, queryByTestId } = render(<Calculator />);

  // Click on "1", "2", "3", "+", "4", "5", "6", "=", expect "579"
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('='));
  expect(queryByTestId('display')).toHaveTextContent('579');

  // Click on "AC", expect "0"
  fireEvent.click(getByText('AC'));
  expect(queryByTestId('display')).toHaveTextContent('0');

  // Click on "9", "-", "3", "=", expect "6"
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(queryByTestId('display')).toHaveTextContent('6');

  // Click on "5", "x", "4", "/", "2", "+", "1", expect "11"
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('x'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('='));
  expect(queryByTestId('display')).toHaveTextContent('11');
});

afterEach(cleanup);
