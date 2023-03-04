import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from './Quotes';

describe('Quotes', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Quotes />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
