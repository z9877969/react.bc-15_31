import { useNavigate, Outlet } from "react-router-dom";
import NewsCountryNav from "../components/NewsCountryNav/NewsCountryNav";

const NewsPage = () => {
  const navigate = useNavigate();

  const handleShowSearch = () => navigate("/news/search");

  return (
    <>
      <h1>NewsPage</h1>
      <NewsCountryNav />
      <button type="button" onClick={handleShowSearch}>
        Show search
      </button>
      <Outlet />
    </>
  );
};

export default NewsPage;
