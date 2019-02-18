import React from 'react';
import renderer from 'react-test-renderer';
import BookPost from './BookPost.component';


describe('AllBooksOfAnAuthor', () => {
  it('should render without crashing', () => {
    const book = { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 };
    const tree = renderer.create(<BookPost book={book} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
