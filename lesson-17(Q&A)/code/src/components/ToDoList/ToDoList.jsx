import { useQuery, useQueryClient } from "react-query";
// import { useSelector } from "react-redux";
// import { getFilteredTodos } from "../../redux/todos/todosSelectors";
import { getTodosApi } from "../../utils/firebaseApi";
import ToDoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = () => {
  // const filteredTodos = useSelector(getFilteredTodos);
  // const queryClient = useQueryClient();

  const query = useQuery("todos", getTodosApi);
  const todos = query.data || [];

  // console.log("TodoList");

  return (
    <>
      <ul className={s.container}>
        {todos.map((todo) => (
          <ToDoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
