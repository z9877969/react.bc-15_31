import { createReducer } from "@reduxjs/toolkit";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
} from "../todos/todosActions";

const isLoadingReducer = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [getTodosRequest]: () => true,
  [getTodosSuccess]: () => false,
  [getTodosError]: () => false,
  [removeTodoRequest]: () => true,
  [removeTodoSuccess]: () => false,
  [removeTodoError]: () => false,
});

export default isLoadingReducer;
