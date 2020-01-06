import React from "react";
import CardHeader from "../CardHeader";

function index({ childName }) {
  console.log("child component memo renders");
  return <div>Child MemoComponent renders {childName}</div>;
}

export default React.memo(index);
