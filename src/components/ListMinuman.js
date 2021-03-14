import React, { Component } from "react";
import "./ComponenMinuman.css";

export class ListMinuman extends Component {
  render() {
    return (
      <div className="componenMinuman">
        <h3>{this.props.nama}</h3>
        <h4>{this.props.harga}</h4>
        <p>{this.props.stock}</p>
      </div>
    );
  }
}

export default ListMinuman;
