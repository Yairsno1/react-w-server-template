import { SELECT_OPERATION } from '../../actions';
import {routeEnum} from '../../util/navHelper';

const selectOptionReducer = (state=routeEnum.home, action) => {
  let rv = state;

  if (SELECT_OPERATION === action.type) {
    rv = action.operation;
  }

  return rv;
};

export default selectOptionReducer;
