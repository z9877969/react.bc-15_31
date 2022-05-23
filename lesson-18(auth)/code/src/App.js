import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import Error from "./components/Error/Error";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage";
import { getIdToken, getIsAuth } from "./redux/auth/authSelectors";
import { getCurUser } from "./redux/auth/authOperations";

const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const TodoPage = lazy(() =>
  import("./pages/TodoPage" /* webpackChunkName: "todos-page" */)
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login-page" */)
);

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getIsAuth);
  const idToken = useSelector(getIdToken);

  useEffect(() => {
    idToken && dispatch(getCurUser());
  }, [idToken, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout isAuth={isAuth} />}>
          {isAuth ? (
            <>
              <Route index element={<h1>HomePage</h1>} />
              <Route path="counter" element={<CounterPage />} />
              <Route path="/todo" element={<TodoPage />} />
              <Route path="error" element={<Error />} />
              <Route path="*" element={<Navigate to={"/todo"} />} />
            </>
          ) : (
            <>
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="*" element={<Navigate to={"/login"} />} />
            </>
          )}
        </Route>
        {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </div>
  );
};

export default App;
