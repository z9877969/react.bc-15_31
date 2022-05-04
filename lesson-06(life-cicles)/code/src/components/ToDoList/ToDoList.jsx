import TodoItem from "../TodoItem/TodoItem";
import s from "./TodoList.module.scss";

const ToDoList = ({ todos, removeTodo }) => {
  return (
    <ul className={s.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;
