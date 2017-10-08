// @flow
type Action = 
    { type: 'ADD_TODO', payload: string } |
    { type: 'REMOVE_TODO', payload: number } |
    { type : 'REMOVE_ALL_TODOS' };
    
type State = any;
type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
type GetState = () => State;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type PromiseAction = Promise<Action>;

export function addTodo(todo: string): ThunkAction {
    return function(dispatch: Dispatch) {
        return dispatch({              // NOT ABLE TO PUT BREAKPOINT ON THIS LINE
            type: 'ADD_TODO',
            payload: todo
        });
    };
}

export function removeTodo(index: number): ThunkAction {
    return function(dispatch: Dispatch) {
        return dispatch({
            type: 'REMOVE_TODO',
            payload: index
        });
    };
}

export function clearAll(): ThunkAction {
    return function(dispatch: Dispatch) {
        return dispatch({
            type: 'REMOVE_ALL_TODOS'
        });
    };
}

export function addRemoveClear(): ThunkAction {
    return function(dispatch: Dispatch) {
        dispatch(addTodo('something'));
        dispatch(removeTodo(0));
        dispatch(clearAll());
    };
}