import React, { Component } from 'react';
import AllBooksOfAnAuthor from '../AllBooksOfAnAuthor/AllBooksOfAnAuthor.component';


class AllPost extends Component {
  render() {
    // const posts = this.props.posts;
    // console.log(this.props.blogs);
    return (

      <div className="allBooks">

        <AllBooksOfAnAuthor books={this.props.books['J K Rowling']} author="J.K.Rowling" />
        <AllBooksOfAnAuthor books={this.props.books['Sidney Sheldon']} author="Sidney Sheldon" />

      </div>
    );
  }
}
export default AllPost;
