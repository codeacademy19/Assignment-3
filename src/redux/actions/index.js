/*
 * action types
 */


export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const ADD_BOOK = 'ADD_BOOK';


/*
 * action creators
 */
export function addBook(payload) {
  return { type: ADD_BOOK, payload };
}

export function toggleLike(index) {
  return { type: TOGGLE_LIKE, index };
}
