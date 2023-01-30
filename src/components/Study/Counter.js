// import React from 'react'

// const Counter = () => {

//     firstClick = () => {
//         console.log("running")
//     }

//   return (
//     <div>
//        <h2> Counter component</h2>
//        <button onClick={firstClick}>Click</button>
//     </div>
//   )
// }

import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  onReset = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    return (
      <div>
        <h2> Counter component</h2>
        <h4>{this.state.counter}</h4>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onReset}>Reset</button>

      </div>
    );
  }
}

export default Counter;
