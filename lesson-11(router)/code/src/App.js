import { Route, Routes, useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import CounterPage from "./pages/CounterPage";
import NewsPage from "./pages/NewsPage";
import NewsListPage from "./pages/NewsListPage";
import SearchedNews from "./components/SearchedNews/SearchedNews";

const TestPage = () => {
  const params = useParams();
  console.log("params :>> ", params);
  return <h1>TestPage</h1>;
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/news" element={<NewsPage />}>
          <Route path="search" element={<SearchedNews />} />
        </Route>
        <Route path="/news/:country" element={<NewsListPage />} />
        <Route path="/test/:id/:color/:size" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default App;
