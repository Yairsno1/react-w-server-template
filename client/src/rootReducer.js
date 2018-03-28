import { combineReducers } from 'redux';
import activityReducer from './view/activityArea/activityReducer';

const rootReducer = combineReducers({
  activity: activityReducer,
});

export default rootReducer;
