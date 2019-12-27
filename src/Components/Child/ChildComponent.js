import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        return (
            <div>
                <button className="btn" onClick={this.props.greetHandler()}> Click Me to call parent function</button>
            </div>
        )
    }
}
