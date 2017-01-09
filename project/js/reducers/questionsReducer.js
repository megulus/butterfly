import { fromJS, entries } from 'immutable';

function reducer(state={
    questions: [],
    /*userRatings: {},*/
    userAdditionalInput: '',
    allRatingsSet: false,
}, action) {

    switch (action.type) {

        case 'SET_QUESTIONS': {
            return {
                ...state,
                questions: action.payload,
            }
        }

        case 'SET_RATING': {
            return {
                ...state,
                userRatings: action.payload,
                allRequiredInputSet: Object.keys(state.userRatings).length === state.questions.length,
            }
        }
    }

    return state;
}

export default reducer

