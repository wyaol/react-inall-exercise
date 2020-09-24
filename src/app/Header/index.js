import React, {Component} from 'react';
import './index.css';
import {Link, NavLink} from 'react-router-dom';

class Hdeader extends Component {
  render() {
    return (
      <div className="nav">
        <span><NavLink to='/'>HOME</NavLink></span>
        <span><NavLink to='/calculator'>在线计算器</NavLink></span>
        <span><NavLink to='/timer'>在线倒计时器</NavLink></span>
      </div>
    );
  }
}

export default Hdeader;
