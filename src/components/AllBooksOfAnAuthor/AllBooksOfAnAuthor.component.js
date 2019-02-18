import React, { Component } from 'react';
import BookPost from '../BookPost/BookPost.component';
import './AllBooksOfAnAuthor.component.css';

class AllBooksOfAnAuthor extends Component {
  render() {
    return (
      <fieldset className="allBooksOfAnAuthor">
        <legend className="authorName">{this.props.author}</legend>
        <div className="allBooksMain">
          {
            this.props.books.map((book, index) => <BookPost book={book} key={book.Name} onLikeClick={() => this.handleLikeClick(index)} />)
            }

        </div>
      </fieldset>
    );
  }
}
export default AllBooksOfAnAuthor;
