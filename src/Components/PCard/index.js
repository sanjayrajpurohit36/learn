import React, { useState } from "react";
import styled from "styled-components";

import CardHeader from "./../CardHeader/index";
import FieldWiget from "./../FieldWidget";
import "./index.css";

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
    label: "First Name *",
    isDisabled: false
  },
  {
    type: "text",
    label: "Last Name *",
    isDisabled: false
  },
  {
    type: "text",
    label: "Primary Email *",
    isVerified: true,
    isDisabled: true
  },
  {
    type: "text",
    label: "Phone Number *",
    isVerified: true,
    isDisabled: true
  },
  {
    type: "text",
    label: "Country *",
    isVerified: false,
    isDisabled: true
  },
  {
    type: "text",
    label: "City *",
    isVerified: false,
    isDisabled: true
  }
];

const widgetStyle = {
  background: "ffffff"
};
const hello = () => {
  widgetData.map(v => (v.isDisabled = false));
  console.log("widgetData=======>", widgetData);
};
const PCard = props => {
  const [isVerified, showVerificationSign] = useState(true);
  return (
    <Card>
      <div className="side-bar">Side Bar</div>
      <div className="info-container">
        <CardHeader
          headerInfo={{ title: "Personal Info", opt: "Edit" }}
          handleClick={() => hello()}
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
            <div className="input-wrapper-expanded">
              <label className="label">Bio *</label>
              <textarea id="bio"> </textarea>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PCard;
