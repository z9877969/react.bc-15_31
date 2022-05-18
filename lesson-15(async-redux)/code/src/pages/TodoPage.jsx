import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { getTodos } from "../redux/todos/todosOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.items);

  useEffect(() => {
    // !todos.length &&
    // перевірка на наявність данних реалізована в операції
    dispatch(getTodos());
  }, []);

  return (
    <>
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
