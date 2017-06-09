import * as types from './types';

export function addTodo(todo) {
    return function(dispatch) {
        return dispatch({
            type: types.ADD_TODO,
            payload: todo
        });
    };
}

export function removeTodo(index) {
    return function(dispatch) {
        return dispatch({
            type: types.REMOVE_TODO,
            payload: index
        });
    };
}

export function clearAll() {
    return function(dispatch) {
        return dispatch({
            type: types.REMOVE_ALL_TODOS
        });
    };
}
