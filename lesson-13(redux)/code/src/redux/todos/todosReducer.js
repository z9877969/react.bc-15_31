import { combineReducers } from "redux";
import { todo } from "../../data/todo";

const getInitialState = () => JSON.parse(localStorage.getItem("todo")) || todo;
const setTodoToLS = (todos) =>
  localStorage.setItem("todo", JSON.stringify(todos));

const itemsReducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case "addTodo":
      const addedTodos = [...state, payload];
      setTodoToLS(addedTodos);
      return addedTodos;
    case "removeTodo":
      const removedTodos = state.filter((todo) => todo.id !== payload);
      setTodoToLS(removedTodos);
      return removedTodos;
    default:
      return state;
  }
};

const filterReducer = (state = "all", { type, payload }) => {
  switch (type) {
    case "changeFilter":
      return payload;
    default:
      return state;
  }
};

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
