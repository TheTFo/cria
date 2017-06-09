import React from 'react';
import { Route } from 'react-router-dom';
import Sample from './components/Sample';

const SampleRoute = () => <Route path="/samples" component={Sample} />;
export default SampleRoute;