import React, { Component } from "react";
import PureComponent from "./../PureComponent";
import GeneralComponent from "./../GeneralComponent";
import MemoComponent from "./../MemoComponent";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sanjay"
    };
  }
  // the pure and general Components will rendered but the pure component will render only once as the data in state is no changed even in setState function.
  componentDidMount() {
    console.log("Parent component rendered");
    setInterval(() => {
      this.setState({
        name: "Sanjay"
      });
    }, 2000);
  }

  render() {
    console.log("Parent component rendered");
    return (
      <div>
        Parent which includes both components
        {/* <PureComponent childName={this.state.name}> </PureComponent>
        <GeneralComponent childName={this.state.name}> </GeneralComponent> */}
        <MemoComponent childName={this.state.name}> </MemoComponent>
      </div>
    );
  }
}

export default index;
