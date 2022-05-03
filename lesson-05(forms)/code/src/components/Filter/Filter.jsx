import PropTypes from "prop-types";
import s from "./Filter.module.scss";

const Filter = (props) => {
  const { options, filter, handleChange } = props;

  return (
    <ul className={s.filter}>
      {options.map((option) => (
        <li key={option.id} className={s["filter-item"]}>
          <input
            className={s["filter-input"]}
            name="filter"
            value={option.id} // apple || zte || xiaomi
            type="checkbox"
            checked={filter[option.id]} // true
            id={option.id}
            onChange={handleChange}
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
