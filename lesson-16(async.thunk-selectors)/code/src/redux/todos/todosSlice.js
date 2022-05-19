import { createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodos, removeTodo } from "./todosOperations";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    filter: "all",
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
    // createAction("todos/changeFilter")
    // &&
    //  {"todos/changeFilte": (state, {payload}) => state.filter = payload}
  },
  extraReducers: {
    [addTodo.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [addTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: [...state.items, payload],
    }),
    [addTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getTodos.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.items = payload;
      }
    },
    [getTodos.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeTodo.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter((el) => el.id !== payload);
    },
    [removeTodo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = todosSlice.actions;
export default todosSlice.reducer;
