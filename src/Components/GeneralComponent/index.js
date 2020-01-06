import React, { Component } from "react";

class index extends Component {
  render() {
    console.log(
      "****************Child GeneralComponent render****************"
    );
    return <div>Child GeneralComponent render child{this.props.childName}</div>;
  }
}

export default index;
