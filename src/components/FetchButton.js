import React, { Component } from 'react';
import fetchAndUpdate from '../helpers/fetchAndUpdate.js';
import './App.css';

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
            <div style={{ padding: 15 }}>
                <button style={{fontSize: 18}} onClick={this.onFetchClick}>Fetch <strong>hottest</strong> trends</button>
            </div>
        )
    }
}

export default FetchButton