import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowDirection: false
    };
  }
  changeArrow() {
    this.setState(
      {
        arrowDirection: !this.state.arrowDirection
      },
      () => {
        console.log("consoling arrow direction", this.arrowDirection);
      }
    );
  }
  render() {
    return (
      <div className="panel-wrapper">
        <div className="panel-heading">
          <div className="panne-content">{this.props.info.name}</div>
          <div
            className="arrow-opt"
            onClick={() => this.changeArrow()}
            style={{
              cursor: "pointer",
              outline: "none"
            }}
          >
            {this.state.arrowDirection ? "V" : "->"}
          </div>
        </div>
        <div
          className={
            this.state.arrowDirection ? "panel-body-show" : "panel-body-hide"
          }
        >
          {this.props.info.img ? (
            <div className="card-content">
              <img alt="UserImg"></img>
            </div>
          ) : null}
          {this.props.info.hasOwnProperty("name") ? (
            <div className="card-content">{this.props.info.name}</div>
          ) : null}
          {this.props.info.hasOwnProperty("desc") ? (
            <div className="card-content">{this.props.info.desc}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
