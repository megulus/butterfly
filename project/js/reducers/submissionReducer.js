
export default function reducer(state={
    canSubmit: false,
    submitted: false,
}, action) {

    switch (action.type) {
        case 'USER_CAN_SUBMIT': {
            return {
                ...state,
                canSubmit: action.payload,
            }
        }
        case 'USER_CANNOT_SUBMIT': {
            return {
                ...state,
                canSubmit: action.payload,
            }
        }

        case 'SUBMIT': {
            return {
                ...state,
                submitted: true,
            }
        }
    }

    return state;
}