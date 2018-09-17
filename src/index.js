import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppReducer from './reducers/index';
import { logger } from './utils/ReduxLogMid';
import App from './components/App';

import './index.less';

let preloadedState;
try {
  preloadedState = JSON.parse(localStorage.getItem('todostore'));
} catch(e) {
  preloadedState = {};
}

// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create Redux store with initial state
const store = createStore(AppReducer, preloadedState, composeEnhancers(applyMiddleware(ReduxThunk, logger)));
store.subscribe(() => {
  localStorage.setItem('todostore', JSON.stringify(store.getState()));
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
document.getElementById('app'));
