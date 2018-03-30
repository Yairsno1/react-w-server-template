//action types
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CORRECT_A = 'CORRECT_A';
export const GENERATE_Q = 'GENERATE_Q';

// --- action creators ---

export function changeOperationAction() {
  return {
    type: CHANGE_OPERATION,
  };
}

export function correctAnswerAction(status, qText) {
  return {
    type: CORRECT_A,
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
