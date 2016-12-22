
export function checkIfSubmissible() {
    return (dispatch, getState) => {
        const state = getState();
        if (state.mood.moodSet && state.questions.allRatingsSet) {
            dispatch({
                type: 'USER_CAN_SUBMIT',
                payload: state
            })
        } else {
            dispatch({
                type: 'USER_CANNOT_SUBMIT',
                payload: state
            })
        }
    }
}


export function submitAll() {
    return (dispatch, getState) => {
        const state = getState();
        if (state.canSubmit) {
            dispatch({
                type: 'SUBMIT',
                payload: state,
            })
        }
    }
}