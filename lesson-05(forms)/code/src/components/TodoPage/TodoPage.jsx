import { Component } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import { todo } from "../../data/todo";

class TodoPage extends Component {
  state = {
    todos: todo,
  };

  addTodo = (todo) => {
    this.setState((prev) => ({
      todos: [...prev.todos, todo],
    }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((el) => el.id !== id),
    }));
    // return undefined
  };

  render() {
    const { todos } = this.state;
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <ToDoList todos={todos} removeTodo={this.removeTodo} />
      </>
    );
  }
}

export default TodoPage;
