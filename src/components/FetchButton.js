import React, { Component } from 'react';
import fetchAndUpdate from '../helpers/fetchAndUpdate.js';

class FetchButton extends Component {
    constructor(props){
        super(props);
        this.onFetchClick = this.onFetchClick.bind(this);
    }

    onFetchClick(){
        fetchAndUpdate({
            loadingHotTrends: this.props.loadingHotTrends,
            updateHotTrends: this.props.updateHotTrends
        });
    }

    render(){
        return (
            <div>
                <button onClick={this.onFetchClick}>Fetch <strong>hottest</strong> trends</button>
            </div>
        )
    }
}

export default FetchButton