import { useCallback, useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import TodosProvider from "../../context/TodosProvider";
import { priorityOptions } from "../../data/priorityOptions";

const TodoPage = () => {
  const [isRed, setIsRed] = useState(false);
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  const showValue = useCallback(() => console.log("Value-", isRed), [isRed]);

  return (
    <TodosProvider>
      <div style={{ background: isRed ? "red" : "white" }}>
        <button onClick={() => setIsRed((prev) => !prev)} type="button">
          Change Bg
        </button>
        <select value={filter} onChange={handleChange}>
          <option value={priorityOptions.DEFAULT}>All</option>
          <option value={priorityOptions.LOW}>Low</option>
          <option value={priorityOptions.MEDIUM}>Medium</option>
          <option value={priorityOptions.HIGH}>High</option>
        </select>
        <ToDoForm showValue={showValue} />
        <ToDoList filter={filter} />
      </div>
    </TodosProvider>
  );
};

export default TodoPage;
