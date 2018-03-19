//action types
export const SELECT_OPERATION = 'SELECT_OPERATION';

// --- action creators ---
export function selectOperationAction(operation) {
  return {
    type: SELECT_OPERATION,
    operation: operation,
  };
}
