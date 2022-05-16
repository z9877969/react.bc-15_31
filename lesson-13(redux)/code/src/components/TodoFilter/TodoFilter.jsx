import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/todos/todosActions";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  const handleChange = (e) => {
    const { value } = e.target;

    dispatch(changeFilter(value));
  };
  return (
    <select onChange={handleChange} value={filter}>
      <option value="all">All</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  );
};

export default TodoFilter;
