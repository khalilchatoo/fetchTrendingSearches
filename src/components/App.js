import React, { Component } from 'react';
import HotTrendsListContainer from '../containers/HotTrendsListContainer.js';
import FetchButtonContainer from '../containers/FetchButtonContainer.js';
import fetchAndUpdate from '../helpers/fetchAndUpdate.js';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetchAndUpdate({
            loadingHotTrends: this.props.loadingHotTrends,
            updateHotTrends: this.props.updateHotTrends
        });
        /*
        this.props.loadingHotTrends();
        //ajax call here, in success call updateHotTrends();
        setTimeout(() => {
            this.props.updateHotTrends(trendsExampleData);
        }, 1500);*/
    }

    render() {
        let appContent;

        if (this.props.loading) {
            appContent = <div>Loading...</div>;
        } else {
            appContent = [
                <FetchButtonContainer key="fetchBtn" />,
                <HotTrendsListContainer key="hotTrendsList" />
            ];
        }

        return (
            <div className="App">
                {appContent}
            </div>
        )
    }
}

export default App