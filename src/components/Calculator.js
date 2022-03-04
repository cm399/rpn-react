import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      stack: [],
    };
  }

  _addToStack = (stackElement) => {
    let item = Number(parseFloat(stackElement).toFixed(2));
    this.setState((prevState) => ({
      stack: [...prevState.stack, item],
    }));
  };

  handleClick = (event) => {
    let digit = event.target.value;
    if (digit === 10) digit = '.';
    // add the digit clicked to the data table
    this.setState((prevState) => ({
      data: [...prevState.data, digit],
    }));
  };

  hanldeChange = (event) => {
    this.setState = event.target.value;
  };

  // ENTER
  handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();
    if (this.state.data.length < 1) return;
    // get digits from data,
    // join them into a single string
    // and turn them into a number
    let number = this.state.data.join('');
    number = Number(number);
    // empty data
    this.setState(() => ({
      data: [],
    }));
    // add the obtained number to the stack
    this._addToStack(number);
  };

  // ±
  switchSymbol = () => {
    if (this.state.data.length < 1) return;

    let number = [this.state.data * -1];

    this.setState(() => ({
      data: number,
    }));
  };

  // +
  add = () => {
    if (this.state.stack.length < 2) return;

    let stack = this.state.stack;

    this._addToStack(stack.pop() + stack.pop());
  };

  // -
  substract = () => {
    if (this.state.stack.length < 2) return;

    let stack = this.state.stack;

    var last_el = stack.pop();
    var b_last_el = stack.pop();

    this._addToStack(b_last_el - last_el);
  };

  // *
  multiply = () => {
    if (this.state.stack.length < 2) return;

    let stack = this.state.stack;

    this._addToStack(stack.pop() * stack.pop());
  };

  // ÷
  divide = () => {
    if (this.state.stack.length < 2) return;

    let stack = this.state.stack;

    var last_el = stack.pop();
    var b_last_el = stack.pop();

    this._addToStack(b_last_el / last_el);
  };

  // SWAP last two elements in the stack
  swap = () => {
    if (this.state.stack.length < 2) return;

    let stack = this.state.stack;

    var last_el = stack.pop();
    var b_last_el = stack.pop();

    this._addToStack(last_el);
    this._addToStack(b_last_el);
  };

  // DROP last element in the stack
  drop = () => {
    if (this.state.stack.length < 1) return;

    let stack = this.state.stack;

    stack.pop();

    this.setState(() => ({
      stack: [...stack],
    }));
  };
  // CLEAR last digit input from data
  clear = () => {
    if (this.state.data.length < 1) return;
    let data = this.state.data;
    data.pop();
    this.setState(() => ({
      data: [...data],
    }));
  };

  render() {
    return (
      <div>
        <div id="screen">
          <ul id="stack">
            {this.state.stack.map(function (stackElement, index) {
              return <li key={index}>{stackElement}</li>;
            })}
          </ul>
          <span id="current-number">{this.state.data}</span>
          <input type="number" onChange={this.hanldeChange} />
        </div>
        <div id="buttons">
          <div className="column">
            <ul id="action-buttons">
              <li id="swap" onClick={this.swap}>
                {' '}
                SWAP{' '}
              </li>
              <li id="clear" onClick={this.clear}>
                {' '}
                AC{' '}
              </li>
              <li id="drop" onClick={this.drop}>
                {' '}
                DROP{' '}
              </li>
            </ul>
            <ul id="input-buttons">
              <li value="7" onClick={this.handleClick}>
                7
              </li>
              <li value="8" onClick={this.handleClick}>
                {' '}
                8{' '}
              </li>
              <li value="9" onClick={this.handleClick}>
                {' '}
                9{' '}
              </li>
              <li value="4" onClick={this.handleClick}>
                {' '}
                4{' '}
              </li>
              <li value="5" onClick={this.handleClick}>
                {' '}
                5{' '}
              </li>
              <li value="6" onClick={this.handleClick}>
                {' '}
                6{' '}
              </li>
              <li value="1" onClick={this.handleClick}>
                {' '}
                1{' '}
              </li>
              <li value="2" onClick={this.handleClick}>
                {' '}
                2{' '}
              </li>
              <li value="3" onClick={this.handleClick}>
                {' '}
                3{' '}
              </li>
              <li value="10" onClick={this.handleClick}>
                {' '}
                .{' '}
              </li>
              <li value="0" onClick={this.handleClick}>
                {' '}
                0{' '}
              </li>

              <li value="11" onClick={this.switchSymbol}>
                {' '}
                ±{' '}
              </li>
            </ul>
          </div>
          <div className="column">
            <ul id="operator-buttons">
              <li value="add" onClick={this.add}>
                {' '}
                +{' '}
              </li>
              <li value="rem" onClick={this.substract}>
                {' '}
                -{' '}
              </li>
              <li value="mult" onClick={this.multiply}>
                {' '}
                *{' '}
              </li>
              <li value="div" onClick={this.divide}>
                {' '}
                ÷{' '}
              </li>
              <li id="enter" onClick={this.handleSubmit}>
                {' '}
                &#8617;{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
