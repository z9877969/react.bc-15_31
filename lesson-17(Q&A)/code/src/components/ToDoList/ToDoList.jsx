import { useSelector } from "react-redux";
import {
  getFilteredTodos,
  getFilterTodo,
  getTodos,
} from "../../redux/todos/todosSelectors";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = () => {
  const filteredTodos = useSelector(getFilteredTodos);

  console.log("TodoList");

  return (
    <>
      <ul className={s.container}>
        {filteredTodos.map((todo) => (
          <ToDoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
