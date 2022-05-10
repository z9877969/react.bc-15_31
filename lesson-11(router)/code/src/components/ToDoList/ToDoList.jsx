import { useMemo } from "react";
import ToDoItem from "../TodoItem/TodoItem";
import { useTodosContext } from "../../context/TodosProvider";
import s from "./TodoList.module.scss";

const ToDoList = ({ filter }) => {
  const { todos } = useTodosContext();

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
