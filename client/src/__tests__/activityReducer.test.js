//  Dispatched action is sent to all reducers, hence
//we need to test a reducer for each possible action.

import activityStatusEnum from '../view/activityArea/activityStatusEnum';
import activityReducer, {arInitialState} from '../view/activityArea/activityReducer';
  import {
    fireErrorAction,
    hasAnswerAction,
    hideErrorAction,
    generateQuestionAction,
    getNextQuestionAction,
    retryQuestionAction,
    showAnswerAction} from '../actions';

let currState = undefined;

beforeEach(() => {
  currState = {
    status: activityStatusEnum.answerShow,
    qText: '3 * 5 = 15'
  };;
});

it ('activityTextReducer_noAction', () => {
  const actualState = activityReducer(undefined, {});

  expect(actualState).toEqual(arInitialState);
});

it ('activityTextReducer_fireErrorAction', () => {
  const expectedNextState = Object.assign({}, currState);

  const a = fireErrorAction('aaa', 'bbb');
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});

it ('activityTextReducer_hasAnswerAction', () => {
  const status = activityStatusEnum.answerOk;
  const text = 'Well done!';
  const expectedNextState = {
    status: status,
    qText: text,
  };

  const a = hasAnswerAction(status, text);
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});

it ('activityTextReducer_hideErrorAction', () => {
  const expectedNextState = Object.assign({}, currState);

  const a = hideErrorAction();
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});

it ('activityTextReducer_getNextQuestionAction', () => {
  const expectedNextState = {
    status: activityStatusEnum.next,
    qText: '',
  };

  const a = getNextQuestionAction();
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});

it ('activityTextReducer_generateQuestionAction', () => {
  const status = activityStatusEnum.q;
  const text = '6 - 3 = ?'
  const expectedNextState = {
    status: status,
    qText: text,
  };

  const a = generateQuestionAction(status, text);
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});

it ('activityTextReducer_retryQuestionAction', () => {
  const status = activityStatusEnum.q;
  const text = '6 - 3 = ?'
  const expectedNextState = {
    status: status,
    qText: text,
  };

  const a = retryQuestionAction(status, text);
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});

it ('activityTextReducer_showAnswerAction', () => {
  const status = activityStatusEnum.answerShow;
  const text = '6 - 3 = 3'
  const expectedNextState = {
    status: status,
    qText: text,
  };

  const a = showAnswerAction(status, text);
  const actualState = activityReducer(currState, a);

  expect(actualState).toEqual(expectedNextState);
});
