import { ACTION_TYPES } from "../actions/sideToogleActions";

const initialState = {
  isOpen: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SIDEBAR:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
};
export default reducer;