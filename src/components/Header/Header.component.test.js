import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.component';


describe('Header', () => {
  it('should render header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
