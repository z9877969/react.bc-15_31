import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import Header from "../Header/Header";

const Layout = () => {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <Header isAuth={isAuth} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
