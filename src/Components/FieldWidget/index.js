import React from "react";
import styled from "styled-components";
import Tick from "./../../assets/got-right-outlined.png";

const Widget = styled.div`
  background: ${widgetStyles =>
    widgetStyles.background ? widgetStyles.background : "pink"};
  width: ${widgetStyles => (widgetStyles.width ? widgetStyles.width : "270px")};
  padding: 2px;
  box-sizing: border-box;
  &:nth-child(even) {
    margin-left: 40px;
    margin-top: 0.9rem;
  }
  &:nth-child(odd) {
    margin-left: 20px;
    margin-top: 0.9rem;
  }
`;

const LabelFor = styled.div`
  color: #262331;
  font-family: Gilroy;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  text-align: left;
  margin-bottom: 10px;
  width: auto;
`;

const FieldWidget = props => {
  const { widgetData, widgetStyles } = props;
  return (
    <Widget>
      <LabelFor className="label">
        {widgetData.label ? widgetData.label : "label"}
      </LabelFor>
      <div class="balanced-input-wrapper">
        <input
          className="field"
          type={widgetData.type ? widgetData.type : "text"}
          disabled={widgetData.isDisabled}
          //   value={widgetData.value ? widgetData.value : ""}
        ></input>
        <span className="input-balancer">
          {widgetData.isVerified ? (
            <img
              src={Tick}
              className="verification-img"
              width="16px"
              height="16px"
              alt="verification-img"
            />
          ) : null}
        </span>
      </div>
    </Widget>
  );
};

export default FieldWidget;
