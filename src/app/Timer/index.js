import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Timer extends Component {
  state = {
    value: 0,
    restTime: 'End',
    isStarted: false
  }

  formatValue(value) {
    return isNaN(Number(value)) ? value : `${value} Seconds`;
  }

  onClick = () => {
    this.setState({
      isStarted: true,
      restTime: 'Start'
    })
    const id = setInterval(() => {
      if (this.state.restTime === 0) {
        this.setState({
          isStarted: false,
          restTime: 'End'
        });
        clearInterval(id);
      } else {
        this.setState({
          restTime: isNaN(Number(this.state.restTime)) ? this.state.value : this.state.restTime - 1,
        });
      }
    }, 1000);
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className="cont">
        <h1>在线倒计时器</h1>
        <div className="timer">
          <div>
            <div className="left">
              <div className="time-setter">
                <span>设置时间</span>
                <input type="text" onChange={this.onChange}/>
              </div>
              <button onClick={this.onClick} disabled={this.state.isStarted}>Start</button>
            </div>
            <div className="timer-display">{this.formatValue(this.state.restTime)}</div>
          </div>
          <div className="clear"></div>

          <div className="go-home"><Link to='/' >回到首页</Link></div>
        </div>
      </div>
    );
  }
}

export default Timer;
