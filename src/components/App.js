import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import '../styles/App.css';

import Home from './Home'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route path="/" exact component={Home}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
