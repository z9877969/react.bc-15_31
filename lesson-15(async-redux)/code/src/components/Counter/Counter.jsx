import { connect, useDispatch, useSelector } from "react-redux";
import s from "./Counter.module.scss";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../../redux/counter/counterActions";

const CounterTable = ({ counter }) => <p className={s.count}>{counter}</p>;

const Counter = ({
  // counter,
  incrementProps,
  decrementProps,
  resetProps,
}) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const increment = () => {
    // incrementProps(25);
    dispatch(incrementAction(25));
  };

  const decrement = () => {
    // decrementProps(15);
    dispatch(decrementAction(10));
  };

  const reset = () => {
    // resetProps();
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
// const mapStateToProps = (state) => ({
//   counter: state.counter,
// });

// const mapDispatchToProps = {
//   incrementProps: incrementAction, // (value) => dispatch(incrementAction(value))
//   decrementProps: decrementAction,
//   resetProps: resetAction,
// };

// export default connect(null, mapDispatchToProps)(Counter);
