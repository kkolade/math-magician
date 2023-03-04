import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from './Calculator';

test('Calculator component renders correctly', () => {
  const component = renderer.create(<Calculator />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('clicking on the 7 button should display 7', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  const display = getByTestId('display');
  const button7 = getByText('7');

  fireEvent.click(button7);

  expect(display.textContent).toBe('7');
});
