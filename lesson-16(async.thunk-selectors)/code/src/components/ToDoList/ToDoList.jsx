import { useSelector } from "react-redux";
import {
  getFilteredTodos,
  getFilterTodo,
  getTodos,
} from "../../redux/todos/todosSelectors";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = () => {
  // const { filter, items: todos } = useSelector((state) => state.todos);
  // const filter = useSelector(getFilterTodo);
  // const todos = useSelector(getTodos);
  const filteredTodos = useSelector(getFilteredTodos);

  // const filteredTodos = useMemo(() => {
  //   if (filter === "all") return todos;
  //   return todos.filter((todo) => todo.status === filter);
  // }, [filter, todos]);

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
