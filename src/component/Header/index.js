import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div className="Header">
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Header;
