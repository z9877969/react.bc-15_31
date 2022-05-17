import { createAction } from "@reduxjs/toolkit";
import { generate } from "shortid";

export const addTodo = createAction("addTodo", (formData) => {
  return {
    payload: {
      ...formData,
      id: generate(),
    },
  };
});
// export const addTodo = (todo) => ({
//   type: "addTodo",
//   payload: todo,
// });

export const removeTodo = createAction("removeTodo");
// export const removeTodo = (id) => ({
//   type: "removeTodo",
//   payload: id,
// });

export const changeFilter = createAction("changeFilter", (e) => {
  return {
    payload: e.target.value,
  };
});
// export const changeFilter = (value) => ({
//   type: "changeFilter",
//   payload: value,
// });
