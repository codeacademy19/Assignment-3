import React, { Component } from 'react';
import './BookContent.component.css';

class BookContent extends Component {
  render() {
    const book = this.props.book;

    return (
      <div className="main">
        <div className="backgroundImage" style={{ backgroundImage: 'url("./Images/cover_image.jpeg")' }} />

        <div className="title">

          <span>{book.Name.toUpperCase()}</span>

        </div>
      </div>
    );
  }
}
export default BookContent;
