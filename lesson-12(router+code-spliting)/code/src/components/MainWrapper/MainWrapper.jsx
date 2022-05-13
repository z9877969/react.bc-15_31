import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const MainWrapper = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainWrapper;
