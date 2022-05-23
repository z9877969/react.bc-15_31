import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { getTodos } from "../redux/todos/todosOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.isLoading);
  const localId = useSelector((state) => state.auth.localId);

  useEffect(() => {
    localId && dispatch(getTodos());
  }, [localId]);

  console.log("TodoPage");

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
