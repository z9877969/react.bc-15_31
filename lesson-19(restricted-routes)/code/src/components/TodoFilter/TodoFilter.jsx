import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/todos/todosSlice";
import { priorityOptions } from "../../data/priorityOptions";
import { getFilterTodo } from "../../redux/todos/todosSelectors";

const { DEFAULT, LOW, MEDIUM, HIGH } = priorityOptions;

const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterTodo);
  
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
