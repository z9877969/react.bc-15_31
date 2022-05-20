import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import { store } from "./redux/store";
import ErrorWrapper from "./components/ErrorWrapper/ErrorWrapper";
import TodosQueryProvider from "./context/TodosQueryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <TodosQueryProvider>
        <ErrorWrapper>
          <App />
        </ErrorWrapper>
      </TodosQueryProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);
