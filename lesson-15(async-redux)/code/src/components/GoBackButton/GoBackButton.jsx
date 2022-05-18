import { Link, useLocation } from "react-router-dom";

const GoBackButton = ({ title, className }) => {
  const location = useLocation();

  return (
    <Link to={location.state || "/"} className={className}>
      {title}
    </Link>
  );
};

export default GoBackButton;
