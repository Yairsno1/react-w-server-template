import { combineReducers } from 'redux';
import activityReducer from './view/activityArea/activityReducer';
import errorReducer from './view/error/errorReducer';

const rootReducer = combineReducers({
  activity: activityReducer,
  error: errorReducer,
});

export default rootReducer;
