import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import TodosProvider, { TodosContext } from "./context/TodosProvider";

// console.log("TodosContext :>> ", TodosContext);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
