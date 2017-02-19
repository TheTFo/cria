import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import i18n from './i18n';
import configureStore from './store/configureStore';
import routes from './routes';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root')
);
