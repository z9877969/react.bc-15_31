import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = React.createElement("h1", null, "Base Title");
const item1 = React.createElement("li", null, "Item-1");
const item2 = React.createElement("li", null, "Item-2");
const list = React.createElement(
  "ul",
  { style: { padding: 0, listStyle: "none" } },
  item1,
  item2
);
const container = React.createElement("div", null, title, list);

root.render(
  <React.StrictMode>
    <App />
    {/* {App()} */}
  </React.StrictMode>
  // <h1>Base End Point</h1>
  // container
  // <div>
  //   <h1>Base Title</h1>
  //   <ul style={{ padding: 0, listStyle: "none" }}>
  //     <li>Item-1</li>
  //     <li>Item-2</li>
  //   </ul>
  // </div>
);
