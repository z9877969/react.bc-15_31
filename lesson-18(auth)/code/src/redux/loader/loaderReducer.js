import { createReducer } from "@reduxjs/toolkit";
import { addTodo, getTodos, removeTodo } from "../todos/todosOperations";

const isLoadingReducer = createReducer(false, {
  [addTodo.pending]: () => true,
  [addTodo.fulfilled]: () => false,
  [addTodo.rejected]: () => false,
  [getTodos.pending]: () => true,
  [getTodos.fulfilled]: () => false,
  [getTodos.rejected]: () => false,
  [removeTodo.pending]: () => true,
  [removeTodo.fulfilled]: () => false,
  [removeTodo.rejected]: () => false,
});

export default isLoadingReducer;
