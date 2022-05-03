import { Component } from "react";
import { generate } from "shortid";
import Filter from "../Filter/Filter";
import ProductsList from "../ProductsList/ProductsList";
import filterOptions from "../../data/data-filter.json";
import products from "../../data/data.json";
import s from "./Main.module.scss";

const productsWithId = products.map((el) => ({ ...el, id: generate() }));
const filterInitialState = filterOptions.reduce((acc, { id }) => {
  acc[id] = false; // {apple: false} -> {apple: false, samsung: false}
  return acc;
}, {});

class Main extends Component {
  state = {
    filter: filterInitialState,
    // filter: {
    //   apple: false,
    //   zte: false,
    //   samsung: false,
    //   huawei: false,
    //   xiaomi: false
    // }
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "filter") {
      this.setState((prev) => ({
        filter: { ...prev.filter, [value]: checked },
      }));
    }
  };

  sortProducts = (products) => {
    return products.sort((a, b) => {
      // if (a.model > b.model) return 1;
      // if (a.model < b.model) return -1;
      // return 0;
      return a.model.localeCompare(b.model);
    });
  };

  getFilteredProducts = () => {
    if (Object.values(this.state.filter).every((el) => !el))
      return this.sortProducts(productsWithId);
    const products = productsWithId.filter(
      ({ type }) => this.state.filter[type]
    );
    return this.sortProducts(products);
  };

  render() {
    const { addToCart } = this.props;
    const filteredProducts = this.getFilteredProducts();
    return (
      <main className={s.container}>
        <Filter
          options={filterOptions}
          filter={this.state.filter}
          handleChange={this.handleChange}
        />
        <ProductsList products={filteredProducts} addToCart={addToCart} />
      </main>
    );
  }
}

export default Main;
