import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/todos/todosOperations";
import sprite from "../../assets/icons/sprite.svg";
import s from "./TodoItem.module.scss";

const ToDoItem = ({ title, descr, id, date, status }) => {
  const dispatch = useDispatch();

  const removeItem = () => dispatch(removeTodo(id));

  return (
    <li className={s.toDoItem}>
      <p className={s.date}>{date}</p>
      <h3 className={s.title}>{title}</h3>
      <p className={s.descr}>{descr}</p>
      <p className={s.descr}>{status}</p>
      <button onClick={removeItem} className={s.todoBtn}>
        <svg className={s.icon}>
          <use href={sprite + "#icon-trash"}></use>
        </svg>
      </button>
    </li>
  );
};

export default ToDoItem;
