import { combineReducers } from "redux";
import auth from "./auth";
import sidebarToggle from "./sidebarToggle";
import flowList from "./flowList";

const combinedReducer = (() =>
  combineReducers({
    auth,
    sidebarToggle,
    flowList,
  }))();

export default combinedReducer;
