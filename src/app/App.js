import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Header from '../app/Header';
import Calculator from '../app/Calculator';
import Timer from '../app/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/calculator' component={Calculator}/>
            <Route path='/timer' component={Timer}/>
            <Route path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
