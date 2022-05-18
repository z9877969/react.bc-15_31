import counterReducer from "./counter/counterReducer";
import todos from "./todos/todosSlice";
// import todos from "./todos/todosReducer";
import isLoading from "./loader/loaderReducer";
import { configureStore, createAction } from "@reduxjs/toolkit";

// import logger from "redux-logger";

const someMiddleware = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      console.group("action ", action.type);
      const prevState = getState();
      console.log("prevState -> ", prevState);
      console.log("action -> :>> ", action);
      next(action);
      const nextState = getState();
      console.log("nextState :>> ", nextState);
      console.groupEnd();
    };
  };
};

const actionCreatorRequest = createAction("actionCreatorRequestType");
const actionCreatorSuccess = createAction("actionCreatorSuccessType");
const actionCreatorError = createAction("actionCreatorErrorType");

// request || pending
// success ||fullfield
// error || rejected

export const operation = (data) => (dispatch) => {
  dispatch(actionCreatorRequest());
  fetch(data)
    .then((res) => dispatch(actionCreatorSuccess(res)))
    .catch((error) => dispatch(actionCreatorError(error.message)));
};

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     // ((dispatch) => {})(dispatch)
//     const fn = action;
//     fn(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

// thunk({ getState, dispatch })(next)(action);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos,
    isLoading,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      someMiddleware
      // thunk
    ),
  // devTools: process.env.NODE_ENV === "development",
});
