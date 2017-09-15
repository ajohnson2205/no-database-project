import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Imported Components

import Test from './components/test';
import TestApi from './components/testApi';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ""
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="components">
          <Test className="component-test" />
          <TestApi />
        </div>
        <div>
          {/* <input type="text">Data here</input> */}
        </div>
      </div>
    );
  }
}

export default App;
