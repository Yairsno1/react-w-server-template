import {
  FIRE_ERROR,
  HIDE_ERROR,
} from '../../actions';

const errorReducer = (
  state={
    isError: false,
    visible: true,
    message: '',
    text: '',
  },
  action) => {
  let rv = {
    isError: false,
    visible: true,
    message: '',
    text: '',
  };

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
