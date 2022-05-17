import { createAction } from "@reduxjs/toolkit";

export const incrementAction = createAction("incrementAction");
// -> (value) => ({type: "incrementActionType", payload: value}) -> incrementAction(321)
export const decrementAction = createAction("decrementAction");
export const resetAction = createAction("resetAction");

// export const incrementAction = (value) => ({
//   type: "incrementAction",
//   payload: value,
// });

// export const decrementAction = (value) => ({
//   type: "decrementAction",
//   payload: value,
// });

// export const resetAction = () => ({
//   type: "resetAction",
// });
