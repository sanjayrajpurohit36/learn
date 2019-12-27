import React, { Component } from 'react'
import "./index.css";

class index extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="card-wrapper" style={{...this.props.cardStyle}}>
                {
                    this.props.info.img ? 
                    <div className="card-content"> 
                        <img alt="UserImg"></img>
                    </div>
                    : null

                }
                {
                    this.props.info.hasOwnProperty("name") ?
                    <div className="card-content" >
                        {this.props.info.name}
                    </div>
                    : null
                }
               {
                   this.props.info.hasOwnProperty("desc") ? 
                    <div className="card-content">
                        {this.props.info.desc}   
                    </div> 
                    : null
               }
            </div>
        )
    }
}

export default index;