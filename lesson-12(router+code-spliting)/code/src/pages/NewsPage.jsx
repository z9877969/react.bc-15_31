import { useNavigate, Outlet, Link } from "react-router-dom";
import NewsCountryNav from "../components/NewsCountryNav/NewsCountryNav";

const linkStyles = {
  display: "inline-block",
  fontSize: "24px",
  padding: "5px 10px",
};

const NewsPage = () => {
  const navigate = useNavigate();

  const handleShowSearch = () => navigate("/news/search");
  return (
    <>
      <h1>NewsPage</h1>
      <NewsCountryNav />
      <button
        style={{ display: "block", margin: "0 auto" }}
        type="button"
        onClick={handleShowSearch}
      >
        Show search
      </button>
      <Link style={linkStyles} to="/news/some">
        Some News
      </Link>
      <Link style={linkStyles} to="/news/amazing">
        Amazing News
      </Link>
      <Outlet />
    </>
  );
};

export default NewsPage;
