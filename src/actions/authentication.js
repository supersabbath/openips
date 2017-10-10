import * as actionType from './actionTypes';
import usersAPI from '../mock_server/mockAuth';

export function loginDidFail(bool) {
    return {
        type: actionType.LOGIN_DID_FAIL,
        didFail: true
    };
}
export function loginIsLoading(bool) {
    return {
        type: actionType.LOGIN_IS_LOADING ,
        isLoading: true
    };
}

export function showLoginDialog() {
    return {
        type: actionType.SHOW_LOGIN_DIALOG ,
        showDialogView:true
    };
}

export function signInSuccess(user) {
    return { type: actionType.LOGIN_REQUEST , user };
}

export function signIn(){
    return function (dispatch) {
        return usersAPI.authenticateUser().then(user => {
            dispatch(signInSuccess(user));
        }).catch( error  => {
            throw error;
        })
    }
}