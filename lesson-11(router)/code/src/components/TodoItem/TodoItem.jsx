import { useEffect, useRef, useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import { useTodosContext } from "../../context/TodosProvider";
import s from "./TodoItem.module.scss";

const ToDoItem = ({ title, descr, id, date, status }) => {
  const { removeTodo } = useTodosContext();

  const removeItem = () => removeTodo(id);

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
