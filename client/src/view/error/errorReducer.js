import {
  FIRE_ERROR,
  HIDE_ERROR,
} from '../../actions';

export const erInitialState = {
  isError: false,
  visible: true,
  message: '',
  text: '',
};

const errorReducer = (
  state=erInitialState, action) => {
  let rv = Object.assign({}, erInitialState);

  if (FIRE_ERROR === action.type) {
    rv.isError = true;
    rv.message = action.message;
    rv.text = action.text;
  } else if (HIDE_ERROR === action.type) {
    rv = Object.assign(rv, state, {visible: false})
  }

  return rv;
};

export default errorReducer;
