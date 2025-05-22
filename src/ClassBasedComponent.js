import React, { Component } from "react";

class LifeCycleCounter extends Component {
  constructor(props) {
    super(props);
    console.log("1", "constructor()");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("2", "getDerivedStateFromProps()");

    return null;
  }

  componentDidMount() {
    console.log("3", "componentDidMount()");
  }

  shouldComponentUpdate() {
    console.log("4", "shouldComponentUpdate()");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("5", "getSnapshotBeforeUpdate()");
  }

  componentDidUpdate() {
    console.log("6", "componentDidUpdate()");
  }

  componentWillUnmount() {
    console.log("7", "componentWillUnmount");
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log("This is Render method");
    return (
      <div>
        This is Counter Class component {this.state.count}
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}

export default LifeCycleCounter;
