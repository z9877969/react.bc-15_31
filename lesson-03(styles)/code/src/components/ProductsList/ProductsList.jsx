import { generate } from "shortid";
import ProductsListItem from "../ProductsListItem/ProductsListItem";
import s from "./ProductsList.module.scss";

const ProductsList = (props) => {
  const { products } = props;
  // const isGreen = true;
  return (
    // <section className={`${s.container} ${isGreen ? s.green : s.default}`}>
    <section className={s.container}>
      <ul className={s.products}>
        {products.map((product) => (
          <ProductsListItem key={generate()} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
