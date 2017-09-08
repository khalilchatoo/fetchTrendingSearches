import React, { Component } from 'react'
import TrendRow from './TrendRow.js'

class HotTrendsList extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.trends.map((trend,index) => 
                    <TrendRow {...trend} index={index+1} key={index}/>
                )}
            </div>
        )
    }
}

export default HotTrendsList

/*
The component can also look like this:
function List(props) {
    return <h1>{props.title}</h1>
}
*/