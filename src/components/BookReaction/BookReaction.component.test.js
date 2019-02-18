import React from 'react';
import renderer from 'react-test-renderer';
import BookReaction from './BookReaction.component';


describe('AllBooksOfAnAuthor', () => {
  it('should render without crashing', () => {
    const book = { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 };
    const tree = renderer.create(<BookReaction book={book} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
