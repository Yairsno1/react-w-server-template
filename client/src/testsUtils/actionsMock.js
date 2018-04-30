import {
  FIRE_ERROR,
  GENERATE_Q,
  GET_NEXT_Q,
  HAS_A,
  HIDE_ERROR,
  RETRY_Q,
  SHOW_A,} from '../actions';

const actionsMock = [
  {
    name: 'fireErrorAction',
    mock: {
      type: FIRE_ERROR,
      message: ':-(',
      text: 'Server error',
    }
  },
  {
    name: 'hasAnswerAction',
    mock: {
      type: HAS_A,
      status: -1,
      qText: 'This is my answer: ',
    }
  },
  {
    name: 'hideErrorAction',
    mock: {
      type: HIDE_ERROR,
    }
  },
  {
    name: 'generateQuestionAction',
    mock: {
      type: GENERATE_Q,
      status: -2,
      qText: 'Processing ...',
    }
  },
  {
    name: 'getNextQuestionAction',
    mock: {
      type: GET_NEXT_Q,
    }
  },
  {
    name: 'retryQuestionAction',
    mock: {
      type: RETRY_Q,
      status: -3,
      qText: 'I\'m asking again',
    }
  },
  {
    name: 'showAnswerAction',
    mock: {
      type: SHOW_A,
      status: -4,
      qText: 'The correct is answer is: ',
    }
  }
];

export default actionsMock;
