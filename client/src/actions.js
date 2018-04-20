//action types
export const GENERATE_Q = 'GENERATE_Q';
export const GET_NEXT_Q = 'GET_NEXT_Q';
export const FIRE_ERROR = 'FIRE_ERROR';
export const HAS_A = 'HAS_A';
export const HIDE_ERROR = 'HIDE_ERROR';
export const RETRY_Q = 'RETRY_Q';
export const SHOW_A = 'SHOW_A';
// --- action creators ---

export function fireErrorAction(message, text) {
  return {
    type: FIRE_ERROR,
    message: message,
    text: text,
  };
}

export function hasAnswerAction(status, qText) {
  return {
    type: HAS_A,
    status: status,
    qText: qText,
  };
}

export function hideErrorAction() {
  return {
    type: HIDE_ERROR,
  };
}

export function generateQuestionAction(status, qText) {
  return {
    type: GENERATE_Q,
    status: status,
    qText: qText,
  };
}

export function getNextQuestionAction() {
  return {
    type: GET_NEXT_Q,
  };
}

export function retryQuestionAction(status, qText) {
  return {
    type: RETRY_Q,
    status: status,
    qText: qText,
  };
}

export function showAnswerAction(status, qText) {
  return {
    type: SHOW_A,
    status: status,
    qText: qText,
  };
}
