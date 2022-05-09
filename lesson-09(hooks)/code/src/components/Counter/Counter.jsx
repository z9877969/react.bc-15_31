import React, { useState } from "react";
import s from "./Counter.module.scss";

const CounterTable = ({ counter }) => <p className={s.count}>{counter}</p>;

const Counter = () => {
  const [counter, setCounter] = useState(150); // -> counter: 100, method -> [value, setValue]
  // const [counter1, setCounter1] = useState(0);
  // const [counter2, setCounter2] = useState(200);
  // const [counter3, setCounter3] = useState(50);
  // state = {
  //   counter: 100,
  //   counter1: 0,
  //   counter2: 200,
  //   counter3: 50,
  // };

  const increment = () => {
    // setCounter(counter + 10);
    // setCounter(counter + 10);
    // setCounter(counter + 10);

    // this.setState((prevState) => ({ counter: prevState.counter + 10 }));
    setCounter((prevCounter) => prevCounter + 10);
  };

  const decrement = () => {
    setCounter((prevCounter) => prevCounter - 20);
  };

  const reset = () => {
    // this.setState({ counter: 100 });
    setCounter(100);
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
