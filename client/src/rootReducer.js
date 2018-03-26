import { combineReducers } from 'redux';
import activityStatusReducer from './view/activityArea/activityStatusReducer';

const rootReducer = combineReducers({
  activityStatus: activityStatusReducer,
});

export default rootReducer;
