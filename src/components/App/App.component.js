import React, { Component } from 'react';
import Header from '../Header/Header.component';
import Body from '../Body/Body.component';
import './App.component.css';
import getBooks from '../../helpers/getBooks';
import postBooks from '../../helpers/postBooks';


class App extends Component {
state={
  axiosBooks: [],
  loading: true,
}

async componentDidMount() {
  // console.log(this.props);

  return getBooks('http://localhost:7000/Books').then(async (res) => {
    this.setState({
      axiosBooks: res,

      loading: false,
    });
    console.log(res);
    res['J K Rowling'].map((x) => { this.props.initializeBooks(x); });
    res['Sidney Sheldon'].map((x) => { this.props.initializeBooks(x); });
    console.log(state.books);
    await postBooks().then((res1) => {
      console.log(res1);
    });
  });
}


render() {
  if (this.state.loading) {
    return <div>LOADING...</div>;
  }

  return (

    <div className="App">
      <Header />
      <Body books={this.state.axiosBooks} />
    </div>
  );
}
}

export default App;
