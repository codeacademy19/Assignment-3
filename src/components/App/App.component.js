import React, { Component } from 'react';
import Header from '../Header/Header.component';
import Body from '../Body/Body.component';
import './App.component.css';
import getBooks from '../../helpers/getBooks';


class App extends Component {
state={
  axiosBooks: [],
  loading: true,
}

async componentDidMount() {
  // console.log(this.props);
  return getBooks().then((res) => {
    this.setState({
      axiosBooks: res,

      loading: false,
    });
    console.log(res);
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
