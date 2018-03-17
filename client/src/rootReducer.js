import { combineReducers } from 'redux';
import selectOptionReducer from './view/sidebar/selectOptionReducer';

const rootReducer = combineReducers({
  activeOperation: selectOptionReducer,
});

export default rootReducer;
