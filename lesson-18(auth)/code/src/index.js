import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.scss";
import App from "./App";
import { persistor, store } from "./redux/store";
import ErrorWrapper from "./components/ErrorWrapper/ErrorWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ErrorWrapper>
          <App />
        </ErrorWrapper>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
