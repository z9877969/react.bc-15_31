import {
  HeaderStyled,
  LogoStyled,
  NavStyled,
  UserInfoWrapperStyled,
  UserNameStyled,
  UserEmailStyled,
  NavLinkStyled,
  BtnLogout,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getEmail, getIsAuth } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const email = useSelector(getEmail);

  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>

      <NavStyled className="navigation">
        {isAuth ? (
          <>
            <NavLinkStyled to={"/"}>Home</NavLinkStyled>
            <NavLinkStyled to={"/counter"}>Counter</NavLinkStyled>
            <NavLinkStyled to={"/todo"}>Todos</NavLinkStyled>
          </>
        ) : (
          <>
            <NavLinkStyled to={"/login"}>Login</NavLinkStyled>
            <NavLinkStyled to={"/register"}>Register</NavLinkStyled>
          </>
        )}
      </NavStyled>
      {isAuth && (
        <UserInfoWrapperStyled>
          {/* <UserNameStyled>User</UserNameStyled> */}
          <UserEmailStyled>{email}</UserEmailStyled>
          <BtnLogout onClick={() => dispatch(logOut())}>Logout</BtnLogout>
        </UserInfoWrapperStyled>
      )}
    </HeaderStyled>
  );
};

export default Header;
