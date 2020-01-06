import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background: ${props => (props.background ? props.background : "ffffff")};
  width: auto;
  height: auto;
  padding: 2rem 3.5rem;
`;

const CardHeader = props => {
  const { title, opt } = props ? props.headerInfo : CardHeader.defaultProps;
  return (
    <HeaderWrapper>
      <div className="header-content-wrapper">
        <div className="header-title">{title}</div>
        <div className="edit-info" onClick={() => props.handleClick()}>
          {opt}
        </div>
      </div>
    </HeaderWrapper>
  );
};

// setting defaultProps in case props are not present
CardHeader.defaultProps = {
  headerInfo: {
    title: "CardHeader",
    opt: "Option"
  },
  handleClick: () => {}
};

export default CardHeader;
