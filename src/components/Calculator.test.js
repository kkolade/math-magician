import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

test('Calculator component renders correctly', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('adds 2 + 3 and displays 5', () => {
  const { getByText, queryByTestId } = render(<Calculator />);
  const display = queryByTestId('diplay');
  const button2 = getByText('2');
  const buttonPlus = getByText('+');
  const button3 = getByText('3');
  const buttonEquals = getByText('=');

  fireEvent.click(button2);
  fireEvent.click(buttonPlus);
  fireEvent.click(button3);
  fireEvent.click(buttonEquals);

  expect(display.textContent).toBe('5');
});
