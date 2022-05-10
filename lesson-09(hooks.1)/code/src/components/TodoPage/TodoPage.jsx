// import { useState, useEffect } from "react"; для створення стейту і відслідковування його змін
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import { todo } from "../../data/todo";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const TodoPage = () => {
  // const [todos, setTodos] = useState(
  //   () => JSON.parse(localStorage.getItem("todos")) || todo
  // );
  const [todos, setTodos] = useLocalStorage({
    key: "todos",
    initialValue: todo,
  });

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // useEffect(() => {
  //   console.log("first render");
  //   // addTodo({})
  // }, []);
  // useEffect(() => {
  //   console.log("change todo");
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  return (
    <>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </>
  );
};

export default TodoPage;

// class TodoPage extends Component {
//   state = {
//     todos: todo,
//   };

//   addTodo = (todo) => {
//     this.setState((prev) => ({
//       todos: [...prev.todos, todo],
//     }));
//   };

//   removeTodo = (id) => {
//     this.setState((prev) => ({
//       todos: prev.todos.filter((el) => el.id !== id),
//     }));
//     // return undefined
//   };

//   render() {
//     const { todos } = this.state;
//     return (
//       <>
//         <ToDoForm addTodo={this.addTodo} />
//         <ToDoList todos={todos} removeTodo={this.removeTodo} />
//       </>
//     );
//   }
// }
