// @flow
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
import * as todoActions from './todoActions'; 

describe('todoActions', () => {
    it ('should add a todo', () => {
        const store = mockStore({});
        const expectedActions = [{
            type: 'ADD_TODO',
            payload: 'MyTodo'
        }];

        store.dispatch(todoActions.addTodo('MyTodo'));
        expect(store.getActions()).toEqual(expectedActions);
    });
});