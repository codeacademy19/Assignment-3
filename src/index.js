import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.component';
// import Header from './components/Header/Header.component';
// import BookContent from './components/BookContent/BookContent.component';
import Body from './components/Body/Body.component';
import * as serviceWorker from './serviceWorker';

const books = [{ Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }, { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }, { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }, { Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', liked: false, rating: 4.5 }];
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
