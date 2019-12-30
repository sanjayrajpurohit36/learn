import React, { Component } from 'react'

export default class ChildComponent extends Component {

    render() {
        console.log("consolign props in child component",this.props)
        return (
            <div>
                <button className="btn" onClick={() => this.props.alertHandler("Sanjay")}
                > Click Me to call parent function</button>
            </div>
        )
    }
}
