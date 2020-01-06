import React, { Component } from 'react'
import LifeCycleB from "./lifeCycleB";
// this component will show how the mounting phase lifecycle methods will work.

class lifeCycleA extends Component {
    constructor(props) {
        super(props)
        console.log("Lifecycle A constructor")
    
        this.state = {
            testingUpdate: false
        }
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("Lifecycle A getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("Lifecycle B componentDidMount")
    }
    
    // mounting phase lifecycle method
    shouldComponentUpdate(nextProps, nextState) { 
        console.log("lifecycle A shouldComponentUpdate")
        return true;
    }
    // mounting phase lifecycle method 
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("lifecycle A getSnapshotBeforeUpdate")
        return true;
    }

    componentDidUpdate() {
        console.log("lifecycle A componentDidUpdate");
    }

    changeState = () => {
        this.setState({testingUpdate: true})
    }
    render() {
        console.log("render")
        return (
            <div>
                Lifecycle A
                <LifeCycleB></LifeCycleB>   
                <h1>Click the below button to Start the updating phase</h1>
                <button onClick={this.changeState}> Click me </button>
            </div>
        )
    }
}

export default lifeCycleA;