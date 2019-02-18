import { combineReducers } from 'redux';
import {
  ADD_BOOK,
  TOGGLE_LIKE,

} from '../actions';


function books(state = [], action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    case TOGGLE_LIKE:
      return state.map((book, index) => {
        if (index === action.index) {
          return Object.assign({}, book, {
            liked: !book.liked,
          });
        }
        return book;
      });

    default:
      return state;
  }
}

const BookPost = combineReducers({
  books,
});

export default BookPost;
