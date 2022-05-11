import { Link } from "react-router-dom";

const stylesNav = {
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  padding: "10px",
};

const linkStyles = { padding: "10px", border: "1px solid blue" };

const NewsCountryNav = () => {
  return (
    <nav style={stylesNav}>
      <Link style={linkStyles} to="/news/ru">
        RU
      </Link>
      <Link style={linkStyles} to="/news/pl">
        PL
      </Link>
      <Link style={linkStyles} to="/news/en">
        EN
      </Link>
      <Link style={linkStyles} to="/news/fr">
        FR
      </Link>
    </nav>
  );
};

export default NewsCountryNav;
