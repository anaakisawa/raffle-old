import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Email from '../Email';
import Departament from '../Departament';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/email">Email</Link>
            </li>
            <li>
              <Link to="/departament">Departamento</Link>
            </li>
          </ul>
          <hr/>
          <Route exact path="/email" component={Email} />
          <Route path="/departament" component={Departament} />
        </div>
      </Router>
    );
  }
}

export default App;
