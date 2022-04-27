import PropTypes from "prop-types";

const Filter = (props) => {
  const { options } = props;

  return (
    <ul className="filter">
      {options.map((option) => (
        <li key={option.id} className="filter-item">
          <label className="filter-label" htmlFor="apple">
            {option.title}
          </label>
          <input
            className="filter-input"
            name="filter"
            value=""
            type="checkbox"
            id={option.id}
          />
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
