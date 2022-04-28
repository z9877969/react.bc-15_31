import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import "./App.scss";
import { generate } from "shortid";

const addedProducts = [
  {
    id: generate(),
    url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
    title: "ZTE RedMagic",
    price: "11999",
    currency: "UAH",
  },
  {
    id: generate(),
    url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
    title: "ZTE RedMagic",
    price: "11999",
    currency: "UAH",
  },
  {
    id: generate(),
    url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
    title: "ZTE RedMagic",
    price: "11999",
    currency: "UAH",
  },
  {
    id: generate(),
    url: "https://content1.rozetka.com.ua/goods/images/big/238782224.jpg",
    title: "ZTE RedMagic",
    price: "11999",
    currency: "UAH",
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Cart addedProducts={addedProducts} /> */}
    </div>
  );
}

export default App;
