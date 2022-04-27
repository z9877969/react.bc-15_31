import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import products from "../../data/data.json";

const Main = () => {
  return (
    <main>
      <Filter options={filterOptions} />
      <ProductsList products={products} />
    </main>
  );
};

export default Main;
