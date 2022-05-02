import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import "./App.scss";
import { generate } from "shortid";
import User from "./components/User/User";
import user from "./data/user.json";

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
      {/* <Header />
      <Main /> */}
      {/* <Cart addedProducts={addedProducts} /> */}
      <User
        name={user.name}
        email={user.email}
        age={user.age}
        friends={user.friends}
        status={user.status}
      />
    </div>
  );
}

export default App;
