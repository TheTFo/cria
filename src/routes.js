import React from 'react';
import { Route } from 'react-router';
import AppContainer from './components/App';
import TodoContainer from './components/Todo';

export const Routes = (
    <Route path="/" component={AppContainer}>
        <Route path="todo" component={TodoContainer} />
    </Route>
);

export default Routes;