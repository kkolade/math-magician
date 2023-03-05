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

// import { fireEvent, render } from '@testing-library/react';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import Calculator from './Calculator';

// test('Calculator component renders correctly', () => {
//   const component = renderer.create(<Calculator />);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test('adds 2 + 3 and displays 5', () => {
//   const { getByText, queryByTestId } = render(<Calculator />);
//   const display = queryByTestId('diplay');
//   const button2 = getByText('2');
//   const buttonPlus = getByText('+');
//   const button3 = getByText('3');
//   const buttonEquals = getByText('=');

//   fireEvent.click(button2);
//   fireEvent.click(buttonPlus);
//   fireEvent.click(button3);
//   fireEvent.click(buttonEquals);

//   expect(display.textContent).toBe('5');
// });
