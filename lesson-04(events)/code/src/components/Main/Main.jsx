import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import products from "../../data/data.json";
import s from "./Main.module.scss";
import { generate } from "shortid";

const productsWithId = products.map((el) => ({ ...el, id: generate() }));

const Main = ({ addToCart }) => {
  return (
    <main className={s.container}>
      <Filter options={filterOptions} />
      <ProductsList products={productsWithId} addToCart={addToCart} />
    </main>
  );
};

export default Main;
