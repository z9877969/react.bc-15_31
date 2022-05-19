import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";
// import {
//   addTodoError,
//   addTodoRequest,
//   addTodoSuccess,
//   getTodosError,
//   getTodosRequest,
//   getTodosSuccess,
//   removeTodoError,
//   removeTodoRequest,
//   removeTodoSuccess,
// } from "./todosActions";

// export const addTodo = (dataForm) => (dispatch) => {
//   dispatch(addTodoRequest());

//   addTodoApi(dataForm)
//     .then((todo) => dispatch(addTodoSuccess(todo)))
//     .catch((error) => dispatch(addTodoError(error.message)));
// };

// "name/"

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (dataForm, thunkApi) => {
    // dispatch(actionRequest)
    // console.log("thunkApi :>> ", thunkApi);
    try {
      const todo = await addTodoApi(dataForm);
      return todo; // -> dispatch(actionSuccess)
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // -> dispatch(actionError)
    }
  }
);

// export const getTodos = () => (dispatch, getState) => {
//   const { items } = getState().todos;
//   if (items.length) return;

//   dispatch(getTodosRequest());

//   getTodosApi()
//     .then((todos) => dispatch(getTodosSuccess(todos)))
//     .catch((error) => dispatch(getTodosError(error.message)));
// };
export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (_, thunkApi) => {
    const { items } = thunkApi.getState().todos;
    if (items.length) return;
    try {
      // console.log("getTodosRequest");
      const todos = await getTodosApi();
      return todos;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const removeTodo = (id) => (dispatch) => {
//   dispatch(removeTodoRequest());

//   removeTodoApi(id)
//     .then((id) => dispatch(removeTodoSuccess(id)))
//     .catch((error) => dispatch(removeTodoError(error.message)));
// };
export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id, { rejectWithValue }) => {
    try {
      await removeTodoApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
