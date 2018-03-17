//action types
export const SELECT_OPERATION = 'SELECT_OPERATION';

// --- action creators ---
export function SelectOperation(operation) {
  return {
    type: SELECT_OPERATION,
    opertation: operation,
  };
}
