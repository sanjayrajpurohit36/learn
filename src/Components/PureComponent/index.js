import React, { PureComponent } from "react";
//  A pure component implements shouldComponentUpdate with shallow props and state comparison.
//  Shallow Comparison 1.primitive and 2.Complex
// Primitive checks if a == b by value then return true
// complex checks the reference of the objects / arrays if the reference is equal then only it returns true.
class index extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("****************Child PureComponent render****************");
    return <div>Child PureComponent render child {this.props.childName}</div>;
  }
}

export default index;
