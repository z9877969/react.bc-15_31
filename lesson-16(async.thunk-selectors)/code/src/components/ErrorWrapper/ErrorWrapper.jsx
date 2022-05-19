import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ErrorWrapper = ({ children }) => {
  const navigate = useCallback(useNavigate(), []);

  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    error && navigate("/error");
  }, [error, navigate]);

  return <>{children}</>;
};

export default ErrorWrapper;
