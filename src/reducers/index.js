import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import stuffReducer from './stuffReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    stuff: stuffReducer
});

export default rootReducer;
