import React from "react";
import "./index.css";

function index({ person }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {person.map((value, index) => {
            return (
              <tr key={index}>
                <td >{value.name}</td>
                <td >{value.age}</td>
                <td >{value.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default index;
