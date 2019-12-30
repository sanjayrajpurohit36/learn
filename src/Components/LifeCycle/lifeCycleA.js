import React, { Component } from 'react'
import LifeCycleB from "./lifeCycleB";

class lifeCycleA extends Component {
    constructor(props) {
        super(props)
        console.log("Lifecycle A constructor")
    
        this.state = {
             
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle A getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle B componentDidMount")
    }

    render() {
        console.log("render")
        return (
            <div>
                Lifecycle A
                <LifeCycleB></LifeCycleB>            
            </div>
        )
    }
}

export default lifeCycleA;