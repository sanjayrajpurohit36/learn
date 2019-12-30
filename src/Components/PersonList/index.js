import React from "react";
import Table from "./../Table/index";

function index() {
  const person = [
    {
      key: "1",  
      name: "Sanjay",
      age: "21",
      gender: "Male"
    },
    {
      key: "2",  
      name: "Morgan Richardson",
      age: "22",
      gender: "Female"
    },
    {
      key: "3",
      name: "Sanjay",
      age: "21",
      gender: "Male"
    },
    {
      key:"4",
      name: "Sanjay",
      age: "21",
      gender: "Male"
    }
  ];
  return (
    <div>
    <Table key={person.id} person={person}></Table>
    </div>
  );
}

export default index;