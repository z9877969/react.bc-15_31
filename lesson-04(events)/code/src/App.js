import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import "./App.scss";
import { generate } from "shortid";
import Counter from "./components/Counter/Counter";

// const addedProducts = [
//   {
//     id: generate(),
//     url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
//     title: "ZTE RedMagic",
//     price: "11999",
//     currency: "UAH",
//   },
//   {
//     id: generate(),
//     url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
//     title: "ZTE RedMagic",
//     price: "11999",
//     currency: "UAH",
//   },
//   {
//     id: generate(),
//     url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
//     title: "ZTE RedMagic",
//     price: "11999",
//     currency: "UAH",
//   },
//   {
//     id: generate(),
//     url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
//     title: "ZTE RedMagic",
//     price: "11999",
//     currency: "UAH",
//   },
// ];

class App extends Component {
  state = {
    isCartOpen: false,
    productsToCart: [],
  };

  openCart = () => this.setState({ isCartOpen: true });
  closeCart = () => this.setState({ isCartOpen: false });

  addToCart = (product) => {
    const isProduct = this.state.productsToCart.find(
      (el) => el.id === product.id
    );
    this.setState((prevState) => ({
      productsToCart: !isProduct
        ? [...prevState.productsToCart, { ...product, num: 1 }]
        : prevState.productsToCart.map((el) =>
            el.id === product.id ? { ...el, num: el.num + 1 } : el
          ),
    }));
  };

  removeFromCart = (id) => {
    this.setState((prevState) => ({
      productsToCart: prevState.productsToCart.filter(
        (product) => product.id !== id
      ),
    }));
  };

  render() {
    const { isCartOpen, productsToCart } = this.state;
    return (
      <div className="App">
        <Header productsNum={productsToCart.length} openCart={this.openCart} />
        <Main addToCart={this.addToCart} />
        {/* {this.state.isCartOpen && ( */}
        <Cart
          isCartOpen={isCartOpen}
          addedProducts={productsToCart}
          // closeCart={this.closeCart}
          closeCart={() => console.log("object")}
          removeFromCart={this.removeFromCart}
        />
        {/* )} */}
      </div>
      // <Counter />
    );
  }
}

export default App;

