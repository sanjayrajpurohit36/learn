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

    // mounting phase lifecycle method
    shouldComponentUpdate(nextProps, nextState) { 
        console.log("lifecycle B shouldComponentUpdate")
        return true;
    }
    // mounting phase lifecycle method 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("lifecycle B getSnapshotBeforeUpdate")
        return true;
    }

    componentDidUpdate() {
        console.log("lifecycle B componentDidUpdate");
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