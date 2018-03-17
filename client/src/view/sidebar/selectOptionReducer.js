import { SELECT_OPERATION } from '../../actions';
import sidebarOptionEnum from './sidebarOptionEnum';

const selectOptionReducer = (state=sidebarOptionEnum.idle, action) => {
  let rv = state;

  if (SELECT_OPERATION === action.type) {
    rv = action.operation;
  }

  return rv;
};

export default selectOptionReducer;
