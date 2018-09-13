import { combineReducers } from 'redux';

import auth from './auth';
import demo from './demo';
import system from './system';

export const AppReducer = combineReducers({
  auth,
  demo,
  system
});

export default AppReducer;
