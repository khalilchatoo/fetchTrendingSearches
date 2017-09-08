import React, { Component } from 'react'

class TrendRow extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <strong>{this.props.index} </strong>
                <img src={this.props.picture}></img>
                <span> {this.props.title}</span>
            </div>
        )
    }
}

export default TrendRow