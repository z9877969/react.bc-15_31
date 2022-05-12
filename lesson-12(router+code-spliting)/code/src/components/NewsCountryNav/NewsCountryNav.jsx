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
      <Link style={linkStyles} to="/news/ru" state={location}>
        RU
      </Link>
      <Link style={linkStyles} to="/news/pl" state={location}>
        PL
      </Link>
      <Link style={linkStyles} to="/news/en" state={location}>
        EN
      </Link>
      <Link style={linkStyles} to="/news/fr" state={location}>
        FR
      </Link>
    </nav>
  );
};

export default NewsCountryNav;
