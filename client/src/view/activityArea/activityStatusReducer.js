import activityStatusEnum from './activityStatusEnum';
import {CHANGE_ACTIVITY_STATUS} from '../../actions';

const activityStatusReducer = (state=activityStatusEnum.next, action) => {
  let rv = state;

  if (CHANGE_ACTIVITY_STATUS === action.type) {
    rv = action.status;
  }

  return rv;
};

export default activityStatusReducer;
