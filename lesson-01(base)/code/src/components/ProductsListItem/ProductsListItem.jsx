import PropTypes from "prop-types";

const ProductsListItem = ({ url, model, price, currency }) => {
  return (
    <li className="product">
      <img className="image" src={url} alt={model} />
      <div className="descr">
        <h3 className="model">{model}</h3>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </div>
      <button className="btn-bye" type="button">
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  url: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
