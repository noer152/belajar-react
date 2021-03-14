import React, { Component } from "react";

export default class Waktu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      boolean: true,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.getBoolean();
    this.setState({
      date: new Date(),
    });
  }

  getBoolean() {
    let condition = parseInt((this.state.date.getTime() / 1000) % 2);
    if (condition === 0) {
      this.setState({ boolean: true });
    } else {
      this.setState({ boolean: false });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        {this.state.boolean ? "ganjil" : "genap"}
      </div>
    );
  }
}
