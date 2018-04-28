import errorReducer, {erInitialState} from '../view/error/errorReducer';
import actionsMock from '../testsUtils/actionsMock';
import ReducerUnreferedActions from '../testsUtils/reducerUnreferedActions';

it ('errorReducer_noAction', () => {
  const actualState = errorReducer(undefined, {});

  expect(actualState).toEqual(erInitialState);
});

//  Demo: using the ReducerUnreferedActions utility to
//test all the unreferenced actions in one shot.
describe ('Verify actions that are not referenced by errorReducer', () => {
  const referedActions = {
    'FIRE_ERROR': true,
    'HIDE_ERROR': true,
  };

  let unreferedActions = new ReducerUnreferedActions();
  unreferedActions.setReducer(errorReducer);
  unreferedActions.setReducerName('errorReducer');
  unreferedActions.setCurrState({
    isError: true,
    visible: false,
    message: 'A message',
    text: 'A text'
  });
  // errorReducer behavior is somehow unique, if the action
  //doesn't effect the state, it returns the initial state not the
  //passed current state.
  unreferedActions.setExpectedState(erInitialState);

  unreferedActions.setReferedActions(referedActions);
  unreferedActions.setActionsMock(actionsMock);

  unreferedActions.verify();
});
