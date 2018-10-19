import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <header>
          <p>{this.props.text}</p>
        </header>
      </div>
    );
  }
}

export default Header;
