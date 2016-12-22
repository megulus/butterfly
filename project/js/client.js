import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import logger from 'redux-logger';


import Layout from './components/Layout';

import rootReducer from './reducers/index';


const app = document.getElementById('app');

const middleware = applyMiddleware(logger(), thunk);

const store = createStore(rootReducer, middleware);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout}>

            </Route>
        </Router>
    </Provider>,
    app
);











