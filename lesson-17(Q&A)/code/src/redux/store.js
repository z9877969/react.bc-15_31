import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterReducer";
import todos from "./todos/todosSlice";
// import todos from "./todos/todosReducer";
// import isLoading from "./loader/loaderReducer";

export const store = configureStore({
  reducer: {
    counter,
    todos,
    // isLoading,
  },
  // devTools: process.env.NODE_ENV === "development",
});
