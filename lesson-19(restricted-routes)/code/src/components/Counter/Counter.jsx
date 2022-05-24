import { useDispatch, useSelector } from "react-redux";
import s from "./Counter.module.scss";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../redux/counter/counterActions";

const CounterTable = ({ counter }) => <p className={s.count}>{counter}</p>;

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increment = () => {
    dispatch(incrementAction(25));
  };

  const decrement = () => {
    dispatch(decrementAction(10));
  };

  const reset = () => {
    dispatch(resetAction(100));
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>Counter</h1>
      <CounterTable counter={counter} />
      <div className={s.btnsWrapper}>
        <button onClick={decrement} className={s.btn} type="button">
          -
        </button>
        <button onClick={reset} className={s.btn} type="button">
          100
        </button>
        <button onClick={increment} className={s.btn} type="button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
