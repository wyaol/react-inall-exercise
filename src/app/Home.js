import React from 'react';
import './home.less';
import heroImage from '../images/hero-image.png';
import calcalatorImg from '../images/calculator.png';
import timerImg from '../images/timer.png';

const Home = () => {
  return (
    <div className="home">
      <img src={heroImage} alt=""/>
      <div>
        <img src={calcalatorImg} alt=""/>
        <img src={timerImg} alt=""/>
      </div>
    </div>
  );
};

export default Home;