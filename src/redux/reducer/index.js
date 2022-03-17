import backToTopReducer from "./backToTop";
import LoggedReducer from "./login";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  backToTop: backToTopReducer,
  Logged: LoggedReducer
});
export default rootReducer;
