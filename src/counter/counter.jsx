import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    let { count } = this.state;
    count += 1;
    this.setState({
      count
    });
  };

  render() {
    return (
      <div data-test="component-app">
        <h2> The count is {this.state.count}</h2>
        <button id="increment" onClick={() => this.increaseCount()}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default Counter;
