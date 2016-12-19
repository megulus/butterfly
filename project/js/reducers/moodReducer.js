function reducer(state={
    mood: {
        moodNum: 3,
        moodClass: 'three',
        moodText: 'OK',
    },
    moodSet: true,
}, action) {

    switch (action.type) {
        case 'SET_MOOD': {
            return {
                ...state,
                moodSet: true,
                mood: action.payload,
            }
        }
        case 'UNSET_MOOD': {
            return {
                ...state,
                moodSet: false,
            }
        }
    }

    return state;
}

export default reducer
