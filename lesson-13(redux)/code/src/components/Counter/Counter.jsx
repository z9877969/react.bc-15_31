import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
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
  // const [counter, setCounter] = useState(150); // -> counter: 100, method -> [value, setValue]

  const counter = useSelector((state) => state.counter);

  const increment = () => {
    incrementProps(25);
    // setCounter((prevCounter) => prevCounter + 10);
  };

  const decrement = () => {
    decrementProps(15);
    // setCounter((prevCounter) => prevCounter - 20);
  };

  const reset = () => {
    resetProps();
    // setCounter(100);
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

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  incrementProps: incrementAction, // (value) => dispatch(incrementAction(value))
  decrementProps: decrementAction,
  resetProps: resetAction,
};

// const mapDispatchToProps = (dispatch) => ({
//   incrementProps: (value) => dispatch(incrementAction(value)),
//   decrementProps: (value) => dispatch(decrementAction(value)),
//   resetProps: () => dispatch(resetAction),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// (props) => <Counter {...props} {...stateProps} {...methodsProps}/>
