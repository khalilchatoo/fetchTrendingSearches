import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import trendsReducers from './reducers'
import './index.css';
import AppContainer from './containers/AppContainer.js';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(trendsReducers);

ReactDOM.render(
    <Provider store = {store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
