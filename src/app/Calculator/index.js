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
    value: '',
    isResult: false
  }

  judgeFormula = (Formula, newInput) => {
    const newFormula = Formula + newInput;
    return /^(\d+[+-x]?)*$/.test(newFormula) ? newFormula : Formula;
  }

  formatFormula = (str) => {
    return str.replace(/([-x\+])/g, ' $1 ')
  } 

  onClick = (e) => {
    const inputChar = e.target.innerHTML;
    const value = this.state.value;

    if (inputChar === 'Clear') {
      this.setState({
        value: '',
        isResult: false
      })
      return ;
    }

    if (this.state.isResult) {
      this.setState({
        value: inputChar,
        isResult: false
      });
      return ;
    }

    if (inputChar === '=' && !isNaN(Number(value[value.length-1])) ) {
      this.setState({
        value: eval(value.replace('x', '*')).toString(),
        isResult: true
      })
    } else {
      this.setState({
        value: this.judgeFormula(value, inputChar)
      })
    }
  }

  render() {
    return (
      <div className="cont">
        <h1>在线计算器</h1>
        <div className="calculator">
          <div className="display">{this.formatFormula(this.state.value)}</div>
          {this.state.buttons.map((button, index) => (
            <div onClick={this.onClick} key={index} className={`button ${button.color}`}>{button.value}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
