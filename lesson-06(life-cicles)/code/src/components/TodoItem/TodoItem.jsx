import s from "./TodoItem.module.scss";
import sprite from "../../assets/icons/sprite.svg";
import { Component } from "react";

//  () =>
class TodoItem extends Component {
  state = {
    interval: 0,
  };

  intervalId = null;

  componentDidMount() {
    this.intervalId = setInterval(() => {
    //   console.log("object");
    //   this.setState((prev) => ({ interval: prev.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { title, descr, id, date, removeTodo } = this.props;
    const { interval } = this.state;
    return (
      <li key={id} className={s.toDoItem}>
        <p>{interval}</p>
        <p className={s.date}>{date}</p>
        <h3 className={s.title}>{title}</h3>
        <p className={s.descr}>{descr}</p>
        <button onClick={(e) => removeTodo(id)} className={s.toDoBtn}>
          <svg className={s.icon}>
            <use href={sprite + "#icon-trash"}></use>
          </svg>
        </button>
      </li>
    );
  }
}

export default TodoItem;
