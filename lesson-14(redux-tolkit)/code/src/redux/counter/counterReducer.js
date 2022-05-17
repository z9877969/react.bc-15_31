import { createReducer } from "@reduxjs/toolkit";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "./counterActions";

// const counterReducer = (state = 150, action) => {
//   switch (action.type) {
//     case "incrementAction":
//       return state + action.payload;
//     case "decrementAction":
//       return state - action.payload;
//     case "resetAction":
//       return 100;
//     default:
//       return state;
//   }
// };

const counterReducer = createReducer(150, {
  [incrementAction]: (state, action) => {
    return state + action.payload;
  },
  [decrementAction]: (state, { payload }) => state - payload,
  [resetAction]: (_, { payload }) => payload,
});

// console.log("incrementAction.toString() :>> ", incrementAction.toString());

export default counterReducer;
