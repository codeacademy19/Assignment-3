import React, { Component } from 'react';
import BookContent from '../BookContent/BookContent.component';
import BookReaction from '../BookReaction/BookReaction.component';
import './BookPost.component.css';

class BookPost extends Component {
      state={
        liked: this.props.book.liked,
        rating: this.props.book.rating,
      }

      render() {
      // console.log('-----',this.props.product);
        // const product = this.props.blog;
        console.log(this.rating);
        return (
          <div className="BookPost">
            <BookContent book={this.props.book} />
            <BookReaction liked={this.props.book.liked} rating={this.props.book.rating} onLikeClick={this.props.onLikeClick} />

          </div>
        );
      }
}
export default BookPost;
