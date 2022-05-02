import s from "./Cart.module.scss";
import sprite from "../../assets/icons/sprite.svg";

const Cart = ({ addedProducts }) => {
  return (
    <div className={s.cart}>
      <button className={s["btn-close"]} type="button">
        <svg className={s["icon-close"]}>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </button>
      <ul className={s["products"]}>
        {addedProducts.map(({ url, title, price, currency, id }) => (
          <li key={id} className={s["product"]}>
            <img className={s.image} src={url} alt="" />
            <div className={s.descr}>
              <h3 className={s.model}>{title}</h3>
              <span className={s.price}>{price}</span>
              <span className={s.currency}>{currency}</span>
            </div>
            <button className={s["btn-remove"]} type="button">
              <svg className={s["icon-remove"]}>
                <use href={sprite + "#icon-bin2"}></use>
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <button className={s["btn-order"]} type="button">
        Оформить
      </button>
    </div>
  );
};

export default Cart;
