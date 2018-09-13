import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import AppReducer from './reducers/index';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { logger } from './utils/ReduxLogMid';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Create Redux store with initial state
const store = createStore(AppReducer, {}, composeEnhancers(applyMiddleware(ReduxThunk, logger)));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, 
document.getElementById('root'));
registerServiceWorker();
