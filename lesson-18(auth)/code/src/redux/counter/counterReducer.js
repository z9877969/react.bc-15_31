import { createReducer } from "@reduxjs/toolkit";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "./counterActions";

const counterReducer = createReducer(150, {
  [incrementAction]: (state, action) => {
    return state + action.payload;
  },
  [decrementAction]: (state, { payload }) => state - payload,
  [resetAction]: (_, { payload }) => payload,
});

export default counterReducer;
