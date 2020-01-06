import React from 'react';
import styled from 'styled-components';

const Buttons = styled.button`
    ${props=>props.styleBut}
`;

const index = props =>   {
    return (
        <div className="btn-wrapper">
          <Buttons styleBut={props.btnStyles}>{props.name}</Buttons>
        </div>
    )

}
    index.defaultProps = {
        color: 'red'
    }

export default index;