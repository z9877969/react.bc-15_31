import {
  HeaderStyled,
  LogoStyled,
  UserInfoWrapperStyled,
  UserNameStyled,
  UserEmailStyled,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

const Header = ({ productsNum = 0, openCart }) => {
  const isOpen = false;

  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <UserInfoWrapperStyled isOpen={isOpen}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
