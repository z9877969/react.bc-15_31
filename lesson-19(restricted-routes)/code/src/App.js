import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import Error from "./components/Error/Error";
import Layout from "./components/Layout/Layout";
import RegisterPage from "./pages/RegisterPage";
import { getIdToken, getIsAuth, getLocalId } from "./redux/auth/authSelectors";
import { getCurUser } from "./redux/auth/authOperations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AuthPage from "./pages/AuthPage";

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

  const idToken = useSelector(getIdToken);
  const localId = useSelector(getLocalId);

  useEffect(() => {
    idToken && !localId && dispatch(getCurUser());
  }, [idToken, localId, dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="counter"
            element={
              <PrivateRoute>
                <CounterPage />
              </PrivateRoute>
            }
          />
          <Route
            path="todo"
            element={
              <PrivateRoute>
                <TodoPage />
              </PrivateRoute>
            }
          />
          <Route index element={<h1>Welcome to HomePage</h1>} />
          <Route
            path="auth/:authType"
            element={
              <PublicRoute restricted>
                <AuthPage />
              </PublicRoute>
            }
          />
          {/* <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          /> */}
          {/* <Route index element={<Navigate to={"/auth/login"} />} /> */}
          <Route
            path="error"
            element={
              <PublicRoute>
                <Error />
              </PublicRoute>
            }
          />
        </Route>
        <Route path={"*"} element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
