import PropTypes from "prop-types";

const Filter = (props) => {
  const { options } = props;

  return (
    <div className="filter">
      <h2 className="filter-title">Производитель</h2>
      <ul className="filter-list">
        {options.map((option) => (
          <li key={option.id} className="filter-item">
            <label className="filter-label" htmlFor="apple">
              <span class="filter-label-content"> {option.title}</span>
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
    </div>
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
