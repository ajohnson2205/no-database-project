import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Imported Components

import Test from './components/test';
import TestApi from './components/testApi';
import MyApi from './components/myApi'

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="components">
          <Test className="component-test" />
          {/* <TestApi /> */}
        </div>
        <div>
          {/* <h1>Moar content here?</h1> */}
        </div>
        <div>
          <MyApi />
        </div>
      </div>
    );
  }
}

export default App;

//Why is everything re-rendering?
