import { useSelector } from "react-redux";
import { getFilteredTodos } from "../../redux/todos/todosSelectors";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = () => {
  const filteredTodos = useSelector(getFilteredTodos);

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
