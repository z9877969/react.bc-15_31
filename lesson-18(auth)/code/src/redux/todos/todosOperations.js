import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";

export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkApi) => {
    const { items } = thunkApi.getState().todos;
    const { localId, idToken } = thunkApi.getState().auth;
    if (items.length) return;
    try {
      const todos = await getTodosApi({ localId, idToken });
      return todos;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (dataForm, thunkApi) => {
    const { idToken, localId } = thunkApi.getState().auth;
    try {
      const todo = await addTodoApi({ todo: dataForm, idToken, localId });
      return todo; // -> dispatch(actionSuccess)
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // -> dispatch(actionError)
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id, { rejectWithValue, getState }) => {
    const { idToken, localId } = getState().auth;
    try {
      await removeTodoApi({ id, idToken, localId });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
