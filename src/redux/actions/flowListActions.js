export const ACTION_TYPES = Object.freeze({
  GET_FLOW_ALL_LIST: "GET_FLOW_ALL_LIST",
  GET_FLOW_FILTER_LIST: "GET_FLOW_FILTER_LIST",
  FLOW_LIST_INPROGRESS: "FLOW_LIST_INPROGRESS",
});

export const getFlowAllList = (payload) => ({
  type: ACTION_TYPES.GET_FLOW_ALL_LIST,
  payload,
});

export const getFlowFilterList = (payload) => ({
  type: ACTION_TYPES.GET_FLOW_FILTER_LIST,
  payload,
});
