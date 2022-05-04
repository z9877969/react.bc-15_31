import { Component, PureComponent } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import { todo } from "../../data/todo";

const hardCalc = () => {
  let n = 0;
  while (n < 1000000000) {
    n++;
  }
};

// class TodoPage extends PureComponent {
class TodoPage extends Component {
  state = {
    todos: [],
    porcion: 1,
  };

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || todo;
    this.setState({ todos: todos });
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps");
  //   // console.log("nextProps :>> ", nextProps);
  //   // console.log("prevState :>> ", prevState);
  //   if (nextProps.a === false) {
  //     return {
  //       todos: [],
  //     };
  //   }
  //   return prevState;
  // }
  // componentDidMount() {
  //   console.log("CDM");
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.a === nextProps.a) {
  //     return false;
  //   }
  //   return true;
  // }
  // getSnapshotBeforeUpdate() {
  //   return document.body.scrollHeight;
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
      // window.scrollTo({
        //   top: snapshot,
        //   behavior: "smooth",
        // });
      }
      if (prevState.porcion !== this.state.porcion) {
        const addedTodo = this.state.todos[0];
        this.addTodo(addedTodo);
      }
      // this.setState({todos: []}) 
  }
  // componentWillUnmount -> (relized at TodoItem)

  addTodo = (todo) => {
    const newTodos = Array(1)
      .fill("")
      .map((el, idx) => ({ ...todo, id: todo.id + idx }));
    this.setState((prev) => ({
      todos: [...prev.todos, ...newTodos],
    }));
  };

  removeTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((el) => el.id !== id),
    }));
    // return undefined
  };

  render() {
    // hardCalc();
    // console.log("RENDER");
    const { todos } = this.state;
    return (
      <>
        <ToDoForm addTodo={this.addTodo} />
        <ToDoList todos={todos} removeTodo={this.removeTodo} />
        {/* <button
          type="button"
          onClick={() =>
            this.setState((prev) => ({ porcion: prev.porcion + 1 }))
          }
        >
          AddTodo
        </button> */}
      </>
    );
  }
}

export default TodoPage;
