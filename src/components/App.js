import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Festival, Main } from './pages';
import '../index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main}/>
        <Route path="/festival" component={Festival}/>
        <Route path="/festival/:id" component={Festival}/>
      </div>
  );
  }
}

export default App;
