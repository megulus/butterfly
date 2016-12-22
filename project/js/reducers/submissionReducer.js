
export default function reducer(state={
    canSubmit: false,
    submitted: false,
}, action) {

    switch (action.type) {
        case 'USER_CAN_SUBMIT': {
            return {
                ...state,
                canSubmit: true,
            }
        }
        case 'USER_CANNOT_SUBMIT': {
            return {
                ...state,
                canSubmit: false,
            }
        }
    }

    return state;
}