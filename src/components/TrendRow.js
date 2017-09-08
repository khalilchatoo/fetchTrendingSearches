import React, { Component } from 'react';
import './App.css';

class TrendRow extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{ clear: "both", overflow: "auto", padding: 15, borderBottom: "1px solid black" }}>
                <h1 style={{ float: "left", color: "#AAAAAA" }}>{this.props.index} </h1>
                
                <img style={{ float: "left", marginLeft: 10, height: "100px", width: "100px", border: "1px solid black"}} src={this.props.picture} alt={this.props.title}></img>

                <div style={{ float: "left", padding: 10 }}>
                    <div style={{ fontSize: 25, fontWeight: "bold" }}>{this.props.title}</div>
                    <div dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                </div>
            </div>
        )
    }
}

export default TrendRow