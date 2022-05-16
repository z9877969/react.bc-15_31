import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNewsApi } from "../../utils/newsApi";
import NewsList from "../NewsList/NewsList";
import SearchForm from "../SearchForm/SearchForm";

const SearchedNews = () => {
  const location = useLocation();
  const [news, setNews] = useState([]);

  const search = new URLSearchParams(location.search);
  const query = search.get("query");

  useEffect(() => {
    query &&
      getNewsApi({ q: query })
        .then(({ news }) => setNews(news))
        .catch((err) => console.log(err));
  }, [query]);

  return (
    <>
      <SearchForm />
      {news.length > 0 && <NewsList news={news} />}
    </>
  );
};

export default SearchedNews;
