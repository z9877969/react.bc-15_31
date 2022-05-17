import { useDispatch, useSelector } from "react-redux";
// import { changeFilter } from "../../redux/todos/todosActions";
import { changeFilter } from "../../redux/todos/todosSlice";
import { priorityOptions } from "../../data/priorityOptions";

const { DEFAULT, LOW, MEDIUM, HIGH } = priorityOptions;

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.todos.filter);

  const handleChange = (e) => {
    const { value } = e.target;

    dispatch(changeFilter(value));
  };
  return (
    <select
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      value={filter}
    >
      <option value={DEFAULT}>All</option>
      <option value={LOW}>Low</option>
      <option value={MEDIUM}>Medium</option>
      <option value={HIGH}>High</option>
    </select>
  );
};

export default TodoFilter;
