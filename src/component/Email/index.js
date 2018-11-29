import React, { Component } from 'react';
import Header from '../Header';
import Input from '../Input';
import Button from '../Button';

class Email extends Component {
  render() {
    return(
      <div className="Email">
        <Header text="Qual o seu email?"/>
        <Input/>
        <Button text="Continuar"/>
      </div>
    );
  }
}

export default Email;
