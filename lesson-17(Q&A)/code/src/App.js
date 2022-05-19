import { lazy, Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import Error from "./components/Error/Error";

const CounterPage = lazy(() =>
  import("./pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const NewsPage = lazy(() =>
  import("./pages/NewsPage" /* webpackChunkName: "news-page" */)
);
const NewsListPage = lazy(() =>
  import("./pages/NewsListPage" /* webpackChunkName: "newsList-page" */)
);
const TodoPage = lazy(() =>
  import("./pages/TodoPage" /* webpackChunkName: "todos-page" */)
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
          <Route path="/todo" element={<TodoPage />} />
          <Route path="error" element={<Error />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </div>
  );
};

export default App;
