import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";

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
      setTimeout(() => {
        thunkApi.dispatch(
          errorHandler({
            error,
            cb: getTodos,
          })
        );
      }, 0);
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
      setTimeout(() => {
        thunkApi.dispatch(
          errorHandler({
            error,
            cb: () => addTodo(dataForm),
          })
        );
      }, 0);
      return thunkApi.rejectWithValue(error.message); // -> dispatch(actionError)
    }
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id, { rejectWithValue, getState, dispatch }) => {
    const { idToken, localId } = getState().auth;
    try {
      await removeTodoApi({ id, idToken, localId });
      return id;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          errorHandler({
            error,
            cb: () => removeTodo(id),
          })
        );
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);
