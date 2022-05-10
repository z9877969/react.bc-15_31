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

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <NavStyled className="navigation">
        <NavLinkStyled to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/">Counter</NavLinkStyled>
        <NavLinkStyled to="/">Todo</NavLinkStyled>
      </NavStyled>
      <UserInfoWrapperStyled isOpen={false}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
