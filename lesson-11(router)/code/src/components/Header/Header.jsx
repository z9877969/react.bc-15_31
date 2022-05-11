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
import { Link } from "react-router-dom";

const Header = ({ id }) => {
  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <NavStyled className="navigation">
        {/* <NavLinkStyled>Home</NavLinkStyled>
        <NavLinkStyled>Counter</NavLinkStyled>
        <NavLinkStyled>Todo</NavLinkStyled> */}
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/news">News</Link>
      </NavStyled>
      <UserInfoWrapperStyled isOpen={false}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
