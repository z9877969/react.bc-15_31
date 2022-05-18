import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoSuccess,
  getTodosSuccess,
  removeTodoSuccess,
} from "./todosActions";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "all",
    someProp: false,
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [addTodoSuccess]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
    [getTodosSuccess]: (state, { payload }) => {
      state.items = payload;
    },
    [removeTodoSuccess]: (state, { payload }) => {
      state.items = state.items.filter((el) => el.id !== payload);
    },
  },
});

export const { changeFilter } = todosSlice.actions;
export default todosSlice.reducer;
