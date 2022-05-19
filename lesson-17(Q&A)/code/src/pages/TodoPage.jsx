import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoFilter from "../components/TodoFilter/TodoFilter";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDoList from "../components/ToDoList/ToDoList";
import { incrementAction } from "../redux/counter/counterActions";
import { getTodos } from "../redux/todos/todosOperations";

const TodoPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.todos.isLoading);

  useEffect(() => {
    console.log("TodoPage_useEffect");
    dispatch(getTodos());
  }, []);

  console.log("TodoPage");

  return (
    <>
      <button type="button" onClick={() => dispatch(incrementAction(10))}>
        increment
      </button>
      {/* {isLoading && <h1>Loading...</h1>} */}
      <ToDoForm />
      <TodoFilter />
      <ToDoList />
    </>
  );
};

export default TodoPage;
