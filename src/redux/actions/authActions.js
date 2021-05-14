export const ACTION_TYPES = Object.freeze({
  SET_AUTHENTICATION_IN_PROCESS: "SET_AUTHENTICATION_IN_PROCESS",
  AUTHENTICATE: "AUTHENTICATE",
});

export const authenticate = (authUser) => ({
  type: ACTION_TYPES.AUTHENTICATE,
  payload: authUser,
});

export const SET_AUTHENTICATION_IN_PROCESS = (payload) => ({
  type: ACTION_TYPES.SET_AUTHENTICATION_IN_PROCESS,
  payload,
});
