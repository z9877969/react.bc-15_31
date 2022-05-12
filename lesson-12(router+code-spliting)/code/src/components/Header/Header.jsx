import {
  HeaderStyled,
  LogoStyled,
  NavStyled,
  UserInfoWrapperStyled,
  UserNameStyled,
  UserEmailStyled,
  NavLinkStyled,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = ({ id }) => {
  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <NavStyled className="navigation">
        <NavLinkStyled to={"/"}>Home</NavLinkStyled>
        <NavLinkStyled to={"/counter"}>Counter</NavLinkStyled>
        <NavLinkStyled to={"/news"}>News</NavLinkStyled>
        {/* <NavLink
          style={(props) => {
            console.log("isActive /", props);
            return props.isActive ? { color: "red" } : { color: "blue" };
          }}
          to="/"
          className={({ isActive }) => (isActive ? "activeClass" : "linkClass")}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            console.log("isActive /counter", isActive);
            return isActive ? { color: "red" } : { color: "blue" };
          }}
          to="/counter"
        >
          Counter
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            console.log("isActive /news", isActive);
            return isActive ? { color: "red" } : { color: "blue" };
          }}
          to="/news"
        >
          News
        </NavLink> */}
      </NavStyled>
      <UserInfoWrapperStyled isOpen={false}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
