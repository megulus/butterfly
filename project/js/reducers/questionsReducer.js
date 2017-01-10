import { fromJS, entries } from 'immutable';

function reducer(state={
    questions: [],
    userRatings: {
        0: null,
        1: null,
        2: null,
        3: null,
        4: null,
    },
    userTmpRatings: {},
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
            let tempRatings = state.userRatings;
            tempRatings[action.payload[0]] = action.payload[1];
            return {
                ...state,
                userRatings: tempRatings,
                userTmpRatings: {},
                allRequiredInputSet: Object.keys(state.userRatings).length === state.questions.length,
            }
        }

        case 'UNSET_TMPRATING': {
            return {
                ...state,
                userTmpRatings: action.payload,
            }
        }

        case 'SET_TMPRATING': {
            return {
                ...state,
                userTmpRatings: action.payload,
            }
        }
    }

    return state;
}

export default reducer

