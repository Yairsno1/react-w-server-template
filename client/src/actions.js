//action types
export const CHANGE_ACTIVITY_STATUS = 'CHANGE_ACTIVITY_STATUS';

// --- action creators ---
export function changeActivityStatusAction(status) {
  return {
    type: CHANGE_ACTIVITY_STATUS,
    status: status,
  };
}
