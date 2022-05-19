import { createSelector } from "@reduxjs/toolkit";

export const getFilterTodo = (state) => state.todos.filter;
export const getTodos = (state) => state.todos.items;

// export const getFilteredTodos = (state) => {
//   console.log("getFilteredTodos", state);
//   const todos = getTodos(state);
//   const filter = getFilterTodo(state);
//   if (filter === "all") return todos;
//   return todos.filter((todo) => todo.status === filter);
// };

export const getFilteredTodos = createSelector(
  [getFilterTodo, getTodos],
  (filter, todos) => {
    console.log("getFilteredTodos_memo");
    if (filter === "all") return todos;
    return todos.filter((todo) => todo.status === filter);
  }
);
