import { useMemo } from "react";
import { useTodosContext } from "../../context/TodosProvider";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = ({ filter }) => {
  const { todos } = useTodosContext();

  const getFilteredTodos = () => {
    console.log("getFilteredTodos");
    if (filter === "all") return todos;
    return todos.filter((todo) => todo.status === filter);
  };

  // const filteredTodos = getFilteredTodos();
  const filteredTodos = useMemo(() => getFilteredTodos(), [filter, todos]);

  return (
    <ul className={s.container}>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default ToDoList;
