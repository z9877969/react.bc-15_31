import { useMemo } from "react";
import { useSelector } from "react-redux";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = () => {
  // const todos = useSelector((state) => state.todos.items);
  // const filter = useSelector((state) => state.todos.filter);
  const { filter, todos } = useSelector((state) => state.todos);

  const filteredTodos = useMemo(() => {
    if (filter === "all") return todos;
    return todos.filter((todo) => todo.status === filter);
  }, [filter, todos]);

  return (
    <ul className={s.container}>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
