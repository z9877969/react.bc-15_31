import PropTypes from "prop-types";
import s from "./Filter.module.scss";

const Filter = (props) => {
  const { options } = props;

  return (
    <ul className={s.filter}>
      {options.map((option) => (
        <li key={option.id} className={s["filter-item"]}>
          <input
            className={s["filter-input"]}
            name="filter"
            value=""
            type="checkbox"
            id={option.id}
          />
          <label className={s["filter-label"]} htmlFor={option.id}>
            {option.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};

export default Filter;
