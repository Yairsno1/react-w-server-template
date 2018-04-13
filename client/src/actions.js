//action types
export const GENERATE_Q = 'GENERATE_Q';
export const GET_NEXT_Q = 'GET_NEXT_Q';
export const HAS_A = 'HAS_A';
export const RETRY_Q = 'RETRY_Q';
export const SHOW_A = 'SHOW_A';
// --- action creators ---

export function hasAnswerAction(status, qText) {
  return {
    type: HAS_A,
    status: status,
    qText: qText,
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
