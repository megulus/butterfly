import { combineReducers } from 'redux';

import moodReducer from './moodReducer';
import questionsReducer from './questionsReducer';
import submissionReducer from './submissionReducer';
import { routerReducer } from 'react-router-redux';


export default combineReducers({
    mood: moodReducer,
    questions: questionsReducer,
    submit: submissionReducer,
    routing: routerReducer,
});


