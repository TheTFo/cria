import * as types from './types';

export function setReduxCounter(counter) {
    return function(dispatch) {
        return dispatch({
            type: types.SET_REDUX_COUNTER,
            payload: counter
        });
    };
}