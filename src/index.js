import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AppReducer from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { logger } from './utils/ReduxLogMid';

// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create Redux store with initial state
const store = createStore(AppReducer, {}, composeEnhancers(applyMiddleware(ReduxThunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
