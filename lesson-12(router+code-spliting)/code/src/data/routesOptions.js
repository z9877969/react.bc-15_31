import { lazy } from "react";
import { Navigate } from "react-router-dom";
import MainWrapper from "../components/MainWrapper/MainWrapper";

const CounterPage = lazy(() =>
  import("../pages/CounterPage" /* webpackChunkName: "counter-page" */)
);
const NewsPage = lazy(() =>
  import("../pages/NewsPage" /* webpackChunkName: "news-page" */)
);
const NewsListPage = lazy(() =>
  import("../pages/NewsListPage" /* webpackChunkName: "news-page" */)
);
const SearchedNews = lazy(() =>
  import(
    "../components/SearchedNews/SearchedNews" /* webpackChunkName: "searchedNews-page" */
  )
);

const newsPageInserting = [
  {
    name: "SearchedNews",
    path: "search",
    element: SearchedNews,
    inserting: null,
  },
  {
    name: "SomeNews",
    path: "some",
    element: () => <h1>Some News</h1>,
    inserting: null,
  },
  {
    name: "AmazingNews",
    path: "amazing",
    element: () => <h1>Amazing News</h1>,
    inserting: null,
  },
];

const newsListPageInserting = [
  {
    name: "OldNews",
    path: "old",
    element: () => <h1>OldNewsList</h1>,
    inserting: null,
  },
  {
    name: "FreshNews",
    path: "fresh",
    element: () => <h1>FreshNewsList</h1>,
    inserting: null,
  },
];

const mainWrapperInserting = [
  {
    name: "HomePage",
    path: null,
    element: () => <h1>HomePage</h1>,
    inserting: null,
  },
  {
    name: "CounterPage",
    path: "counter",
    element: CounterPage,
    inserting: null,
  },
  {
    name: "NewsPage",
    path: "news",
    element: NewsPage,
    inserting: newsPageInserting,
  },
  {
    name: "NewsListPage",
    path: "news-list/:country",
    element: NewsListPage,
    inserting: newsListPageInserting,
  },
];

export const routesOptions = [
  {
    name: "MainWrapper",
    path: "/",
    element: MainWrapper,
    inserting: mainWrapperInserting,
  },
  {
    name: "RedirectToHome",
    path: "*",
    element: () => <Navigate to={"/"} />,
    inserting: null,
  },
];
