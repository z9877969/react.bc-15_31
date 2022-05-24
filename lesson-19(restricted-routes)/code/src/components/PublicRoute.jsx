import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth } from "../redux/auth/authSelectors";

const PublicRoute = ({ children, restricted }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth && restricted ? <Navigate to="/todo" /> : children;
};

export default PublicRoute;
