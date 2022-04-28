import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import products from "../../data/data.json";
import s from "./Main.module.scss";

const Main = () => {
  // const isGreen = true;
  return (
    <main
      className={s.container}
      // style={{
      //   backgroundColor: isGreen ? "green" : "yellow",
      //   padding: "20px 35px",
      // }}
    >
      <Filter options={filterOptions} />
      <ProductsList products={products} />
    </main>
  );
};

export default Main;
