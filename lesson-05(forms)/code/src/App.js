import { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
// import Counter from "./components/Counter/Counter";
import "./App.scss";
import TodoPage from "./components/TodoPage/TodoPage";

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
        <Cart
          isCartOpen={isCartOpen}
          addedProducts={productsToCart}
          closeCart={this.closeCart}
          removeFromCart={this.removeFromCart}
        />
        {/* <TodoPage /> */}
      </div>
      // <Counter />
    );
  }
}

export default App;

// class Test {
//   state = {
//     counter: 0,
//   };

//   fn = () => {
//     this.setState(
//       {
//         counter: 1,
//       },
//       () => console.log(this.state.counter)
//     );
//   };
// }
