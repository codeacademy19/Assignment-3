import React, { Component } from 'react';
import './Header.component.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="hr1"><hr /></div>
        <div className="headerSpan">
          <div className="BS">BS</div>
          <div className="description">The Book Shelf</div>
        </div>

        <div className="hr2"><hr /></div>
      </header>
    );
  }
}

export default Header;
