import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLike } from '../../redux/actions';
import Body from '../../components/Body';


const mapStateToProps = state => ({
  books: state.books,
});
const mapDispatchToProps = dispatch => ({
  onHeartClick: (id) => {
    dispatch(toggleLike(id));
  },
});
const ConnectedPostReaction = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Body);
export default ConnectedPostReaction;
