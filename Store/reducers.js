// reducers.js
import { combineReducers } from "@reduxjs/toolkit";

// Import your reducers
import tokenReducer from "./Slice/TokenSlice";
const rootReducer = combineReducers({
  token: tokenReducer,
});

export default rootReducer;
