import React from 'react';
import renderer from 'react-test-renderer';
import CalcPage from './CalcPage';

test('CalcPage component renders correctly', () => {
  const component = renderer.create(<CalcPage />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
