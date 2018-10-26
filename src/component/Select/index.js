import React, { Component } from 'react';

class Select extends Component {
  render () {
    return (
      <div className="custom-select">
        <select>
          {this.props.options.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;
