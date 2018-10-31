import React, { Component } from 'react';
import Header from '../Header';
import Select from '../Select';
import Button from '../Button';

class Department extends Component {
  render () {
    const options = ['auto','vip','tecnologia'];

    return (
      <div className="Department">
        <Header text="Selecione a sua área"/>
        <Select options={options}/>
        <Button text="Ok"/>
      </div>
    );
  }
}

export default Department;
