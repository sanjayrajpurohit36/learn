import React from 'react';
import './App.css';
import Card from "./Components/Card/index";
import Panel from "./Components/Panel/index";
import Parent from "./Components/Parent/index";

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
    </div>
  );
}

export default App;