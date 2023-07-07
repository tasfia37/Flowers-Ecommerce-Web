import { loginReducer } from "./reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  LoginState : loginReducer
})