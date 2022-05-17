import { createSlice } from "@reduxjs/toolkit";
import { generate } from "shortid";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "all",
    someProp: false,
  },
  reducers: {
    addTodo(state, { payload }) {
      return {
        ...state,
        items: [...state.items, { ...payload, id: generate() }],
      };
    },
    //  (value) => ({type: "todos/addTodo", payload: value})
    removeTodo(state, { payload }) {
      state.items = state.items.filter((el) => el.id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addTodo, removeTodo, changeFilter } = todosSlice.actions;
console.log("removeTodo(21) :>> ", removeTodo(21));
const todosReducer = todosSlice.reducer;
export default todosReducer;
