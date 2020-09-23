import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';

class Hdeader extends Component {
  render() {
    return (
      <div className="nav">
        <span><Link to='/'>HOME</Link></span>
        <span><Link to='/calculator'>在线计算器</Link></span>
        <span><Link to='/timer'>在线倒计时器</Link></span>
      </div>
    );
  }
}

export default Hdeader;
