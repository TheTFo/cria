import * as types from '../actions/types';

const handlers = {
    [types.ADD_TODO]: (state, todo) => {
        return [...state, todo];
    },
    [types.REMOVE_TODO]: (state, index) => {
        return [...state.slice(0, index), ...state.slice(index + 1)];
    },
    [types.REMOVE_ALL_TODOS]: () => {
        return [];
    }
};

export function todoReducer(state = [], action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action.payload) : state;
}

export default todoReducer;