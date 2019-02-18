import React, { Component } from 'react';
// import BlackHeartImage from './Icons/heart-black.svg'
// import RedHeartImage from './Icons/heart-red.svg';
// import ClappingImage from './Icons/clapping.svg';
import './BookReaction.component.css';

class BookReaction extends Component {
  render() {
    const liked = this.props.liked ? './Icons/heart-red.svg' : './Icons/heart-black.svg';

    // console.log(this.props);
    return (

      <div className="reaction">


        <span className="rating">{this.props.rating}</span>
        {
          <img alt="heart" src={liked} className="heart" />// onClick={this.props.onLikeClick} />
            }
      </div>
    );
  }
}
export default BookReaction;
