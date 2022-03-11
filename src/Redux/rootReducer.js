import { combineReducers } from "redux";
import reducer from "./counter/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  counter: reducer,
  user: userReducer,
});

export default rootReducer;
