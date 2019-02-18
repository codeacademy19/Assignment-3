import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.component';

it('renders without crashing', () => {
  const tree = renderer.create(<App author="J.K.ROWLING" />).toJSON();
  expect(tree).toMatchSnapshot();
});
