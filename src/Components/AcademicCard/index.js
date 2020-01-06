import React, { useState } from "react";
import styled from "styled-components";

import CardHeader from "./../CardHeader/index";
import FieldWiget from "./../FieldWidget";

const Card = styled.div`
  background-color: ${props => (props.background ? props.background : "ffffff")}
  border: 1.27px solid #979797;
  border-radius: 4px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.08);
  width: ${props => (props.width ? props.width : "894px")}
  margin: auto;
  display: flex;
  flex-direction: row;
`;
const widgetData = [
  {
    type: "text",
    label: "Parent Name *",
    isDisabled: false
  },
  {
    type: "email",
    label: "Email *",
    isDisabled: false
  },
  {
    type: "text",
    label: "Phone Number *",
    isEmailVerified: true,
    isDisabled: true
  }
];
const widgetStyle = {
  background: "ffffff"
};

const ParentCard = props => {
  return (
    <Card>
      <div className="side-bar">Side Bar</div>
      <div className="info-container">
        <CardHeader
          headerInfo={{ title: "Academic Info", opt: "Edit" }}
        ></CardHeader>
        <div className="info-body">
          <div class="form-wrapper">
            {widgetData.map(value => {
              return (
                <FieldWiget
                  background={"ffffff"}
                  widgetStyle={widgetStyle}
                  widgetData={value}
                ></FieldWiget>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ParentCard;
