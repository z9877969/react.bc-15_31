import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import todos from "./todos/todosSlice";
// import todos from "./todos/todosReducer";
// import isLoading from "./loader/loaderReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos,
    someProp: createReducer(null, {}),
    someProp1: createReducer(false, {}),
    someProp2: createReducer([null], {}),
    // isLoading,
  },
  // devTools: process.env.NODE_ENV === "development",
});
