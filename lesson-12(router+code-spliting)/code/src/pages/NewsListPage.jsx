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
  const navigate = useNavigate();
  const location = useLocation();
  const { country } = useParams();
  const [news, setNews] = useState([]);

  console.log("newsListPageLocation :>> ", location);

  // const handleGoBack = () => {
  //   navigate(location.state || "/");
  // };

  useEffect(() => {
    getNewsApi({ country }).then(({ news }) => setNews(news));
  }, []);

  return (
    <>
      {/* <button type="button" onClick={handleGoBack}>
        GoBack
      </button> */}
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
