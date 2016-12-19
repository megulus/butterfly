import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import logger from 'redux-logger';


import Layout from './components/Layout';
import moodReducer from './reducers/moodReducer';
import questionsReducer from './reducers/questionsReducer';


const app = document.getElementById('app');

const middleware = applyMiddleware(logger());

const store = createStore(
    combineReducers({
        mood: moodReducer,
        questions: questionsReducer,
        routing: routerReducer
    }),
    middleware
);

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











