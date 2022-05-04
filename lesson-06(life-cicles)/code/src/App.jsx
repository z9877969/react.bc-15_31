import Header from "./components/Header/Header";
import TodoPage from "./components/TodoPage/TodoPage";
// import Counter from "./components/Counter/Counter";
import "./App.scss";
import { Component } from "react";

class App extends Component {
  state = {
    propA: true,
    propB: 0,
  };

  toggle = () => this.setState((prev) => ({ propA: !prev.propA }));
  increment = () => this.setState((prev) => ({ propB: prev.propB + 1 }));

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.toggle} type="button">
          Toggle
        </button>
        <button onClick={this.increment} type="button">
          plus
        </button>
        <TodoPage a={this.state.propA} />
      </div>
      // <Counter />
    );
  }
}

export default App;
