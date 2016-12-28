function reducer(state={
    mood: {
        moodNum: 3,
        moodClass: 'three',
        moodText: 'OK',
    },
    moodSet: true,
    availableMoods: {
        1: {
            moodNum: 1,
            moodClass: 'one',
            moodText: 'Oops',
        },
        2: {
            moodNum: 2,
            moodClass: 'two',
            moodText: 'Mmmh...',
        },
        3: {
            moodNum: 3,
            moodClass: 'three',
            moodText: 'OK',
        },
        4: {
            moodNum: 4,
            moodClass: 'four',
            moodText: 'Great!',
        },
        5: {
            moodNum: 5,
            moodClass: 'five',
            moodText: 'Awesome!',
        },
    }
}, action) {

    switch (action.type) {
        case 'SET_MOOD': {
            const availableMoods = state.availableMoods;
            return {
                ...state,
                moodSet: true,
                mood: availableMoods[action.payload],
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
