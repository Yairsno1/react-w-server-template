import activityStatusEnum from './activityStatusEnum';
import {
  GENERATE_Q,
  HAS_A,
  GET_NEXT_Q,
  RETRY_Q,
  SHOW_A} from '../../actions';

export const arInitialState =  {
  status: activityStatusEnum.next,
  qText: ''
};

const activityTextReducer = (
  state=arInitialState, action) => {
  let rv = Object.assign({},state);

  if (GENERATE_Q === action.type || RETRY_Q === action.type) {
    rv = {
      status: action.status,
      qText: action.qText,
    };
  } else if (GET_NEXT_Q === action.type) {
    rv = {
      status: activityStatusEnum.next,
      qText: '',
    };
  } else if (HAS_A === action.type) {
    rv = {
      status: action.status,
      qText: action.qText,
    };
  } else if (SHOW_A === action.type) {
    rv = {
      status: action.status,
      qText: action.qText,
    };
  }

  return rv;
};

export default activityTextReducer;
