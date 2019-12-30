import React from 'react';
import './App.css';
import Card from "./Components/Card/index";
import Panel from "./Components/Panel/index";
import Parent from "./Components/Parent/index";
import ShowData from "./Components/PersonList/index";
import Form from "./Components/Form/index";
import LifeCycle from "./Components/LifeCycle/lifeCycleA"

function App() {
  const userInfo = { 
    name: "Sanjay Rajpurohit",
    desc: "Started Working at Embibe",
    img: "./img"
  }

  return (
    <div className="App">
      <Card info = {userInfo}></Card>
      <Panel info= {userInfo}></Panel>
      <Parent> </Parent>
      <ShowData></ShowData>
      <Form></Form>
      <LifeCycle></LifeCycle>
    </div>
  );
}

export default App;