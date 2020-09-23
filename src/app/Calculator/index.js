import React, {Component} from 'react';
import './index.css'

class Calculator extends Component {
  state = {
    buttons: [
      {
        value: '+',
        color: 'yellow',
        type: 0
      },
      {
        value: '-',
        color: 'yellow',
        type: 0
      },
      {
        value: 'x',
        color: 'yellow',
        type: 0
      },
      {
        value: '7',
        color: 'orange',
        type: 0
      },
      {
        value: '8',
        color: 'orange',
        type: 0
      },
      {
        value: '9',
        color: 'orange',
        type: 0
      },
      {
        value: '4',
        color: 'orange',
        type: 0
      },
      {
        value: '5',
        color: 'orange',
        type: 0
      },
      {
        value: '6',
        color: 'orange',
        type: 0
      },
      {
        value: '1',
        color: 'orange',
        type: 0
      },
      {
        value: '2',
        color: 'orange',
        type: 0
      },
      {
        value: '3',
        color: 'orange',
        type: 0
      },
      {
        value: '0',
        color: 'orange',
        type: 0
      },
      {
        value: 'Clear',
        color: 'pink',
        type: 0
      },
      {
        value: '=',
        color: 'red',
        type: 0
      }
    ],
    value: ''
  }

  onClick = (e) => {
    const res = this.state.value.search(/^\d$/i);
    console.log(res);
    this.setState({
      value: this.state.value + e.target.innerText
    })
    
  }

  render() {
    return (
      <div className="cont">
        <h1>在线计算器</h1>
        <div className="calculator">
          <div className="display">{this.state.value}</div>
          {this.state.buttons.map((button, index) => (
            <div onClick={this.onClick} key={index} className={`button ${button.color}`}>{button.value}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
