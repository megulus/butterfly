
export function setMood(mood) {
    const availableMoods = {
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
    };
    return {
        type: 'SET_MOOD',
        payload: availableMoods[mood],
    }
}

export function unsetMood() {
    return {
        type: 'UNSET_MOOD',
        payload: 'MOOD_UNSET',
    }
}