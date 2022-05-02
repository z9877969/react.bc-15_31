import PropTypes from "prop-types";
import noImg from "../../assets/img/no-image.png";
import s from "./ProductsListItem.module.scss";

const ProductsListItem = ({
  url = noImg,
  model,
  price = 0,
  currency,
  isAction,
}) => {
  return (
    <li className={s.product}>
      {isAction && <p className={s.info}>Акція</p>}
      <img className={s.image} src={url} alt={model} />
      <div className={s.descr}>
        <h3 className={s.model}>{model}</h3>
        <span className={s.price}>{price}</span>
        <span className={s.currency}>{currency}</span>
      </div>
      <button className={s.btnBye} type="button">
        Купити
      </button>
    </li>
  );
};

// ProductsListItem.defaultProps = {
//   url: noImg,
// };

ProductsListItem.propTypes = {
  url: PropTypes.string,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
