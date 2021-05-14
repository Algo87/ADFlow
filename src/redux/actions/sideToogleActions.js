export const ACTION_TYPES = Object.freeze({
  TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
});

export const toggleSidebar = (payload) => ({
  type: ACTION_TYPES.TOGGLE_SIDEBAR,
  payload,
});
