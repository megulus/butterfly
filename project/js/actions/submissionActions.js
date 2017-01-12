
export function checkIfSubmissible() {
    return (dispatch, getState) => {
        const state = getState();
        if (state.mood.moodSet && state.questions.allRatingsSet) {
            dispatch({
                type: 'USER_CAN_SUBMIT',
                payload: true
            })
        } else {
            dispatch({
                type: 'USER_CANNOT_SUBMIT',
                payload: false
            })
        }
    }
}


export function submit() {
    return (dispatch, getState) => {
        const state = getState();
        if (state.submit.canSubmit) {
            dispatch({
                type: 'SUBMIT',
                payload: 'SUBMIT',
            })
        }
    }
}