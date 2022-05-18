import {
  addTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
} from "./todosActions";

export const addTodo = (dataForm) => (dispatch) => {
  dispatch(addTodoRequest());

  addTodoApi(dataForm)
    .then((todo) => dispatch(addTodoSuccess(todo)))
    .catch((error) => dispatch(addTodoError(error.message)));
};

export const getTodos = () => (dispatch, getState) => {
  const { items } = getState().todos;
  if (items.length) return;

  dispatch(getTodosRequest());

  getTodosApi()
    .then((todos) => dispatch(getTodosSuccess(todos)))
    .catch((error) => dispatch(getTodosError(error.message)));
};

export const removeTodo = (id) => (dispatch) => {
  dispatch(removeTodoRequest());

  removeTodoApi(id)
    .then((id) => dispatch(removeTodoSuccess(id)))
    .catch((error) => dispatch(removeTodoError(error.message)));
};
