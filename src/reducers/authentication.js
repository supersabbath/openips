import * as actionTypes from '../actions/actionTypes'

const initialState = {
    state: 'NOT_LOGED_IN',
    user: {}
}

export function authenticate(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return { state: 'LOGED_IN', user: action.user }
        default:
            return state
    }
}

export function dialogState(state = { shouldShowDialog:false }, action) {
    switch (action.type) {
        case actionTypes.SHOW_LOGIN_DIALOG:
            return Object.assign({}, state, { shouldShowDialog: true });
        case action.LOGIN_IS_LOADING:
            return Object.assign({}, state, { isLoading: true});
        case action.LOGIN_DID_FAIL:
            return Object.assign({}, state, { didFail: true });
        default:
            return state
    }
}
