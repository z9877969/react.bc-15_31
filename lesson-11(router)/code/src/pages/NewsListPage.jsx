import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewsList from "../components/NewsList/NewsList";
import { getNewsApi } from "../utils/newsApi";

const NewsListPage = () => {
  const navigate = useNavigate();
  const { country } = useParams();
  const [news, setNews] = useState([]);

  const handleGoBack = () => {
    navigate({ pathname: "/news", search: "id=321&color=red" });
  };

  useEffect(() => {
    getNewsApi({ country }).then(({ news }) => setNews(news));
  }, []);

  return (
    <>
      <button type="button" onClick={handleGoBack}>
        GoBack
      </button>
      <h1>NewsListPage from {country}</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsListPage;
