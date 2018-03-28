import activityStatusEnum from './activityStatusEnum';
import {GENERATE_Q} from '../../actions';

const activityTextReducer = (
  state={
    status: activityStatusEnum.next,
    qText: ''
  },
  action) => {
  let rv = state;

  if (GENERATE_Q === action.type) {
    rv = {
      status: action.status,
      qText: action.qText,
    };
  }

  return rv;
};

export default activityTextReducer;
