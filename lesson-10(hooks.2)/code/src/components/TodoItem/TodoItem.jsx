import { useEffect, useRef, useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import { useTodosContext } from "../../context/TodosProvider";
import s from "./TodoItem.module.scss";

const ToDoItem = ({ title, descr, id, date, status }) => {
  const { removeTodo } = useTodosContext();

  const [counter, setCounter] = useState(0);

  const intervalRef = useRef();

  const removeItem = () => removeTodo(id);

  const stopCounter = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => stopCounter();
  }, []);

  return (
    <li className={s.toDoItem}>
      <p style={{ textAlign: "center" }}>{counter}</p>
      <button type={"button"} onClick={stopCounter}>
        StopCounter
      </button>
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
