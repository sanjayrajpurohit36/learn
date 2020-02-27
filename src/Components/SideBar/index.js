import React, { Component } from "react";
import styled from "styled-components";
import "./index.css";

const SideBar = styled.div`
  ${props => console.log("props in styled components", props.marginLeft)}
  height: 100%;
  width: 250px;
  background: yellow;
  float: left;
  margin-left: ${props => (props.left ? props.left : "-250px")}
  transition: all 0.5s ease 0s;
  position: fixed
`;
class index extends Component {
  constructor(props) {
    super(props);
    console.log("consoling props in const", props);
    this.state = {
      showSideBar: false
    };
  }

  clickEvent(e) {
    console.log("props in event function ", this.props);
    this.setState(
      {
        showSideBar: !this.state.showSideBar
      },
      () => {
        console.log("state value", this.state.showSideBar);
      }
    );
  }

  render() {
    return (
      <div className="side-bar-container" onClick={e => this.clickEvent(e)}>
        <SideBar
          left={this.state.showSideBar ? this.props.marginLeft : ""}
        ></SideBar>
      </div>
    );
  }
}

export default index;
