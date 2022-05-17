import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { todo } from "../../data/todo";
import { addTodo, removeTodo, changeFilter } from "./todosActions";

// const getInitialState = () => JSON.parse(localStorage.getItem("todo")) || todo;
// const setTodoToLS = (todos) =>
//   localStorage.setItem("todo", JSON.stringify(todos));

// const initialItems = getInitialState();

// const itemsReducer = (state = getInitialState(), { type, payload }) => {
//   switch (type) {
//     case "addTodo":
//       const addedTodos = [...state, payload];
//       setTodoToLS(addedTodos);
//       return addedTodos;
//     case "removeTodo":
//       const removedTodos = state.filter((todo) => todo.id !== payload);
//       setTodoToLS(removedTodos);
//       return removedTodos;
//     default:
//       return state;
//   }
// };
const itemsReducer = createReducer(todo, {
  [addTodo]: (state, { payload }) => [...state, payload],
  [removeTodo]: (state, { payload }) => state.filter((el) => el.id !== payload),
});

// const filterReducer = (state = "all", { type, payload }) => {
//   switch (type) {
//     case "changeFilter":
//       return payload;
//     default:
//       return state;
//   }
// };
const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
});

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
