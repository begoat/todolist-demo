import { combineReducers } from 'redux';
import demo from './demo';
import system from './system';

export const AppReducer = combineReducers({
  demo,
  system
});

export default AppReducer;
