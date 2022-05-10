import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import TodosProvider from "../../context/TodosProvider";
import { priorityOptions } from "../../data/priorityOptions";

const filterWrapperStyles = {
  width: "150px",
  padding: "8px 15px",
  margin: "0 auto",
  border: "1px solid red",
  borderRadius: "3px",
  backgroundColor: "antiquewhite",
};

const TodoPage = () => {
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <TodosProvider>
      <div style={filterWrapperStyles}>
        <p style={{ margin: 0, marginBottom: "10px" }}>Filter</p>
        <select value={filter} onChange={handleChange}>
          <option value={priorityOptions.DEFAULT}>All</option>
          <option value={priorityOptions.LOW}>Low</option>
          <option value={priorityOptions.MEDIUM}>Medium</option>
          <option value={priorityOptions.HIGH}>High</option>
        </select>
      </div>
      <ToDoForm />
      <ToDoList filter={filter} />
    </TodosProvider>
  );
};

export default TodoPage;
