import { combineReducers } from 'redux';
import {authenticate, dialogState} from './authentication'

const rootReducer = combineReducers({
    authenticate ,
    dialogState
});

export default rootReducer;