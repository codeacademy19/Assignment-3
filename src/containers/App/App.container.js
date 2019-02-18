import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../redux/actions';
import App from '../../components/App/App.component';


const mapStateToProps = state => ({
  books: state.books,
});
const mapDispatchToProps = dispatch => ({
  initializeBooks: (bookArray) => {
    dispatch(addBook(bookArray));
  },
});
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
export default ConnectedApp;
