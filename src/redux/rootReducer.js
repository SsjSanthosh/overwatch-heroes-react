import { combineReducers } from "redux";
import heroReducer from "./heroReducer.js";
export default combineReducers({
  hero: heroReducer,
});
