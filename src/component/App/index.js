import React, { Component } from 'react';
import Header from '../Header';
import Input from '../Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text='Nosso primeiro componente'/>
        <Input/>
      </div>
    );
  }
}

export default App;
