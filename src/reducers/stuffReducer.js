import * as types from '../actions/types';

const handlers = {
    [types.SET_REDUX_COUNTER]: (state, counter) => {
        return {
            ...state,
            reduxCounter: counter
        }
    }
};

export function stuffReducer(state = { reduxCounter: 0 }, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : state;
}

export default stuffReducer;