import Header from "./components/Header/Header";
// import Counter from "./components/Counter/Counter";
import "./App.scss";
import TodoPage from "./components/TodoPage/TodoPage";
import Form from "./components/Form/Form";
import { formOptions, formValues } from "./data/formSets";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoPage />
      <Form formOptions={formOptions} formValues={formValues} />
      {/* <Counter /> */}
    </div>
  );
};

export default App;
