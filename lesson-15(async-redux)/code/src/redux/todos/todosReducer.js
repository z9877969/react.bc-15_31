import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  changeFilter,
  addTodoSuccess,
  getTodosSuccess,
  removeTodoSuccess,
} from "./todosActions";

const itemsReducer = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [getTodosSuccess]: (_, { payload }) => payload,
  [removeTodoSuccess]: (state, { payload }) =>
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
