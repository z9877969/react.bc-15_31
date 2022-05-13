import { Link, useLocation } from "react-router-dom";

const stylesNav = {
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "10px",
};

const linkStyles = { padding: "10px", border: "1px solid blue" };

const NewsCountryNav = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <nav style={stylesNav}>
      <Link style={linkStyles} to="/news-list/ru" state={location}>
        RU
      </Link>
      <Link style={linkStyles} to="/news-list/pl" state={location}>
        PL
      </Link>
      <Link style={linkStyles} to="/news-list/en" state={location}>
        EN
      </Link>
      <Link style={linkStyles} to="/news-list/fr" state={location}>
        FR
      </Link>
    </nav>
  );
};

export default NewsCountryNav;
