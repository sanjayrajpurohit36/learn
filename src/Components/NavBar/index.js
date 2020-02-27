import React, { Component } from 'react';
import './index.css';
class index extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <div className='nav-wrapper'>{this.props.children}</div>
            </>
        );
    }
}

export default index;
