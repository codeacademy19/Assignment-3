import React from 'react';
import renderer from 'react-test-renderer';
import AllBooksOfAnAuthor from './AllBooksOfAnAuthor.component';


describe('AllBooksOfAnAuthor', () => {
  it('should render without crashing', () => {
    const books = [{ Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }, { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }, { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }, { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }];
    const tree = renderer.create(<AllBooksOfAnAuthor author="J.K.ROWLING" books={books} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
