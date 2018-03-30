import activityStatusEnum from './activityStatusEnum';
import {
  GENERATE_Q,
  CHANGE_OPERATION,
  CORRECT_A} from '../../actions';

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
  } else if (CHANGE_OPERATION === action.type) {
    rv = {
      status: activityStatusEnum.next,
      qText: '',
    };
  } else if (CORRECT_A === action.type) {
    rv = {
      status: action.status,
      qText: action.qText,
    };
  }

  return rv;
};

export default activityTextReducer;
