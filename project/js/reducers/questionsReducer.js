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
    ratingChanges: 0,
    userTmpRatings: {},
    userAnswers: {},
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
            let ratingsValues = (Object.values(state.userRatings));
            let ratingsNull = ratingsValues.filter((value) => {
                return value === null;
            });
            let ratingsSet = ratingsNull.length === 0;
            return {
                ...state,
                userRatings: tempRatings,
                userTmpRatings: {},
                allRatingsSet: ratingsSet,
            }
        }

        case 'RATING_CHANGE': {
            let count = state.ratingChanges + action.payload;
            return {
                ...state,
                ratingChanges: count,
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

        case 'SET_USER_ANSWER': {
            let tempUserAnswer = state.userAnswers;
            tempUserAnswer[action.payload[0]] = action.payload[1];
            return {
                ...state,
                userAnswers: tempUserAnswer,
            }
        }

        case 'SET_ADDITIONAL_INPUT':
            return {
                ...state,
                userAdditionalInput: action.payload,
            }
    }

    return state;
}

export default reducer

