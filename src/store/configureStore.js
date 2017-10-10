import { createStore , applyMiddleware } from 'redux';
import  rootReducer  from '../reducers';
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk'

// Be sure to ONLY add this middleware in development!
const middleware = process.env.NODE_ENV !== 'production' ?
[reduxImutableStateInvariant(), thunk] :
[thunk];

export default function configureStore (initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}
