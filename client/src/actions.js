//action types
export const GENERATE_Q = 'GENERATE_Q';

// --- action creators ---
export function generateQuestionAction(status, qText) {
  return {
    type: GENERATE_Q,
    status: status,
    qText: qText,
  };
}
