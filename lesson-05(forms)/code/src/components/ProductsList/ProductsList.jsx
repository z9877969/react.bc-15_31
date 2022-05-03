import ProductsListItem from "../ProductsListItem/ProductsListItem";
import s from "./ProductsList.module.scss";

const ProductsList = (props) => {
  const { products, addToCart } = props;

  return (
    <section className={s.container}>
      <ul className={s.products}>
        {products.map((product) => (
          <ProductsListItem
            key={product.id}
            {...product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
