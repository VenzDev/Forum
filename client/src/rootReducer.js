import { combineReducers } from "redux";
import userReducer from "./redux/user";

const initState = {
  helloWorld: "helloWorld"
};

const helloWorldReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ helloWorldReducer, userReducer });

export default rootReducer;
