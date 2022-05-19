import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from "react-router-dom";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import NewsList from "../components/NewsList/NewsList";
import { getNewsApi } from "../utils/newsApi";

const NewsListPage = () => {
  const location = useLocation();
  const { country } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsApi({ country }).then(({ news }) => setNews(news));
  }, []);

  return (
    <>
      <GoBackButton title={"GoBack"} />
      <h1>NewsListPage from {country}</h1>
      <NewsList news={news} />
      <Link to={"old"} state={location.state}>
        Old
      </Link>
      <Link to={"fresh"} state={location.state}>
        Fresh
      </Link>
      <Outlet />
    </>
  );
};

export default NewsListPage;
