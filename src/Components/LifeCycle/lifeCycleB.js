import React, { Component } from 'react'

class lifeCycleA extends Component {
    constructor(props) {
        super(props)
        console.log("Lifecycle B constructor")
    
        this.state = {
             
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle B getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle B componentDidMount")
    }

    render() {
        console.log("render")
        return (
            <div>
                LifeCycle B            
            </div>
        )
    }
}

export default lifeCycleA;