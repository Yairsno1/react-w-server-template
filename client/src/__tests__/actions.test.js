import {FIRE_ERROR, HIDE_ERROR} from '../actions';
import {fireErrorAction, hideErrorAction} from '../actions';

it ('fireErrorAction' , () => {
  const message = 'Ya warady, it is not working';
  const text = 'Not Found';
  const expectedAction = {
    type: FIRE_ERROR,
    message: message,
    text: text
  };
  let actualAction = {};

  actualAction = fireErrorAction(message, text);

  expect(actualAction).toEqual(expectedAction);
});

it ('hideErrorAction' , () => {
  const expectedAction = {
    type: HIDE_ERROR,
  };
  let actualAction = {};

  actualAction = hideErrorAction();

  expect(actualAction).toEqual(expectedAction);
});
