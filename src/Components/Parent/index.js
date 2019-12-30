import React, { Component } from 'react'
import Child from "./../Child/ChildComponent";

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parentName: "Pukhraj Purohit"
        }
        this.showParent = this.showParent.bind(this)
    }

    showParent(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (    
            <div className="parent-wrapper">
                <Child alertHandler = {this.showParent}></Child>
            </div>
        )
    }
}
