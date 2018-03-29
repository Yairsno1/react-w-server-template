//action types
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const GENERATE_Q = 'GENERATE_Q';

// --- action creators ---

export function changeOperationAction() {
  return {
    type: CHANGE_OPERATION,
  };
}

export function generateQuestionAction(status, qText) {
  return {
    type: GENERATE_Q,
    status: status,
    qText: qText,
  };
}
