// import { useEffect } from "react";
import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
// import CounterPage from "./pages/CounterPage";
// import NewsPage from "./pages/NewsPage";
// import NewsListPage from "./pages/NewsListPage";
// import SearchedNews from "./components/SearchedNews/SearchedNews";

const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const NewsPage = lazy(() =>
  import("./pages/NewsPage" /* webpackChunkName: "news-page" */)
);
const NewsListPage = lazy(() =>
  import("./pages/NewsListPage" /* webpackChunkName: "newsList-page" */)
);
const SearchedNews = lazy(() =>
  import(
    "./components/SearchedNews/SearchedNews" /* webpackChunkName: "searchedNews-page" */
  )
);

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

// const Fn = ({ to }) => {
//   fetch("http://server/error/path")
//   return <Navigate to={to} />;
// };

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<h1>HomePage</h1>} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="news" element={<NewsPage />}>
            <Route path="search" element={<SearchedNews />} />
            <Route path="some" element={<h1>Some News</h1>} />
            <Route path="amazing" element={<h1>Amazing News</h1>} />
          </Route>
          <Route path="/news/:country" element={<NewsListPage />}>
            <Route path="old" element={<h1>Old news</h1>} />
            <Route path="fresh" element={<h1>Fresh news</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default App;
