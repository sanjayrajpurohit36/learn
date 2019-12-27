import React, { Component } from 'react'
import Child from "./../Child/ChildComponent";

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: "Pukhraj Purohit"
        }
    }

    showParent() {
        console.log(this.state.parentName)
        alert(`hello ${this.state.parentName}`)
    }

    render() {
        return (    
            <div className="parent-wrapper">
                <Child alertHandler = {this.showParent}></Child>
            </div>
        )
    }
}
