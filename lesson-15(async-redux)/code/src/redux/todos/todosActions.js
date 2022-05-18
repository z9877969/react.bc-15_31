import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("changeFilter", (e) => {
  return {
    payload: e.target.value,
  };
});

export const addTodoRequest = createAction("todos/addTodoRequest");
export const addTodoSuccess = createAction("todos/addTodoSuccess");
export const addTodoError = createAction("todos/addTodoError");

export const getTodosRequest = createAction("todos/getTodosRequest");
export const getTodosSuccess = createAction("todos/getTodosSuccess");
export const getTodosError = createAction("todos/getTodosError");

export const removeTodoRequest = createAction("todos/removeTodoRequest");
export const removeTodoSuccess = createAction("todos/removeTodoSuccess");
export const removeTodoError = createAction("todos/removeTodoError");
