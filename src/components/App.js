import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Festival } from './pages';
class App extends Component {
  render() {
    return (
      <div>
        {/* Main 페이지 / 이 경로에 import 하면 됨  */}
        <Route exact path="/" component={Festival}/>
        <Route path="/festival" component={Festival}/>
      </div>
  );
  }
}

export default App;
