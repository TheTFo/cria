import React from 'react';
import { Route } from 'react-router-dom';
import TodoContainer from './containers/TodoContainer';

const TodoRoute = () => <Route path="/todo" component={TodoContainer} />;
export default TodoRoute;