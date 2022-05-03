import React, { Component } from "react";
import s from "./Counter.module.scss";

const CounterTable = ({ counter }) => <p className={s.count}>{counter}</p>;

class Counter extends Component {
  state = {
    counter: 100,
  };

  increment = () => {
    // this.setState((prevState) => ({ counter: prevState.counter + 10 }));
    // this.setState((prevState) => ({ counter: prevState.counter + 10 }));
    // this.setState((prevState) => ({ counter: prevState.counter + 10 }));

    this.setState((prevState) => ({ counter: prevState.counter + 10 }));
  };

  reset = () => {
    this.setState({ counter: 100 });
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Counter</h1>
        {/* <p className={s.count}>{this.state.counter}</p> */}
        <CounterTable counter={this.state.counter} />
        <div className={s.btnsWrapper}>
          <button
            onClick={() =>
              this.setState((prevState) => {
                return {
                  counter: prevState.counter - 10,
                };
              })
            }
            className={s.btn}
            type="button"
          >
            -
          </button>
          {/* {React.createElement("button", { onClick: () => {} })} */}
          <button onClick={this.reset} className={s.btn} type="button">
            100
          </button>
          <button onClick={this.increment} className={s.btn} type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
