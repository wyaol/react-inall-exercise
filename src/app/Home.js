import React from 'react';
import './home.less';
import heroImage from '../images/hero-image.png';
import calcalatorImg from '../images/calculator.png';
import timerImg from '../images/timer.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <img src={heroImage} alt=""/>
      <div>
        <Link to="/calculator"><img src={calcalatorImg} alt=""/></Link>
        <Link to="/timer"><img src={timerImg} alt=""/></Link>
      </div>
    </div>
  );
};

export default Home;