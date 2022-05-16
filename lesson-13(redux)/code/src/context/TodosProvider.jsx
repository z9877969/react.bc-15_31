import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodosContext = createContext();
export const useTodosContext = () => useContext(TodosContext);

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage({
    key: "todos",
    initialValue: [],
  });

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo }}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
