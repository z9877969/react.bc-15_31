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

const Header = ({ id }) => {
  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <NavStyled className="navigation">
        <NavLinkStyled to={"/"}>Home</NavLinkStyled>
        <NavLinkStyled to={"/counter"}>Counter</NavLinkStyled>
        <NavLinkStyled to={"/todo"}>Todos</NavLinkStyled>
        <NavLinkStyled to={"/news"}>News</NavLinkStyled>
      </NavStyled>
      <UserInfoWrapperStyled isOpen={false}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
