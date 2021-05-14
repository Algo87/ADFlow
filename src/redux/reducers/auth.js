import { ACTION_TYPES } from "../actions/authActions";

const initialState = {
  inProcess: true,
  authUser: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_AUTHENTICATION_IN_PROCESS:
      return {
        ...state,
        inProcess: action.payload,
      };
    case ACTION_TYPES.AUTHENTICATE:
      return {
        ...state,
        authUser: action.payload || initialState.authUser,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
