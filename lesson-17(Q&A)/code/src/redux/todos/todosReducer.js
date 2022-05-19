import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  changeFilter,
  // addTodoSuccess,
  getTodosSuccess,
  removeTodoSuccess,
} from "./todosActions";
import { addTodo, getTodos, removeTodo } from "./todosOperations";

const itemsReducer = createReducer([], {
  // [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [addTodo.fulfilled]: (state, { payload }) => [...state, payload],
  // [getTodosSuccess]: (_, { payload }) => payload,
  [getTodos.fulfilled]: (_, { payload }) => {
    // console.log("payload :>> ", payload);
    return payload;
  },
  // [removeTodoSuccess]: (state, { payload }) =>
  //   state.filter((el) => el.id !== payload),
  [removeTodo.fulfilled]: (state, { payload }) =>
    state.filter((el) => el.id !== payload),
});
const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
