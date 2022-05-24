import { useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import AuthForm from "../components/AuthForm/AuthForm";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { loginUser, registerUser } from "../redux/auth/authOperations";

const AuthPage = () => {
  const dispatch = useDispatch();
  const { authType } = useParams();

  const cbOnSubmit = (dataForm) => {
    authType === "login" && dispatch(loginUser(dataForm));
    authType === "register" && dispatch(registerUser(dataForm));
  };

  return (
    <>
      {authType !== "login" && authType !== "register" && (
        <Navigate to="/auth/login" />
      )}
      <AuthForm authType={authType} cbOnSubmit={cbOnSubmit} />

      {/* {authType === "login" ? (
        <LoginForm />
      ) : authType === "register" ? (
        <RegisterForm />
      ) : (
        <Navigate to="/auth/login" />
      )} */}
    </>
  );
};

export default AuthPage;
