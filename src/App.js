import React from "react";
import "./App.css";
import Card from "./Components/Card/index";
import Panel from "./Components/Panel/index";
import Parent from "./Components/Parent/index";
import ShowData from "./Components/PersonList/index";
import Form from "./Components/Form/index";
import LifeCycle from "./Components/LifeCycle/lifeCycleA";
import Button from "./Components/Button/index";
import ParentComponent from "./Components/ParentComponent/index";
import PCard from "./Components/PCard";
import ParentCard from "./Components/ParentCard";
import SideBar from "./Components/SideBar";

function App() {
  const userInfo = {
    name: "Sanjay Rajpurohit",
    desc: "Started Working at Embibe",
    img: "./img"
  };
  const btnStyle = {
    color: "red",
    borderRadius: "2px",
    backgroundColor: "purple"
  };

  return (
    <div className="App">
      {/* //   <Card info={userInfo}></Card>
    //   <Panel info={userInfo}></Panel>
    //   <Parent> </Parent>
    //   <ShowData></ShowData>
    //   <LifeCycle></LifeCycle>
  //   <Button name="Click Me" btnStyles={btnStyle}></Button> */}
      {/* <ParentComponent> </ParentComponent> */}
      {/* <PCard> </PCard> */}
      {/* <ParentCard></ParentCard> */}
      {/* <SideBar marginLeft="0px"> </SideBar> */}
      <Form></Form>
    </div>
  );
}

export default App;
