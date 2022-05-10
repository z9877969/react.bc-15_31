import Header from "./components/Header/Header";
// import Counter from "./components/Counter/Counter";
import "./App.scss";
import TodoPage from "./components/TodoPage/TodoPage";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoPage />
      {/* <Counter /> */}
    </div>
  );
};

export default App;
