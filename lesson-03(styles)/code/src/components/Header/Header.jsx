import {
  HeaderStyled,
  LogoStyled,
  UserInfoWrapperStyled,
  UserNameStyled,
  UserEmailStyled,
} from "./Header.styled";
import logo from "../../assets/img/logo.png";
import sprite from "../../assets/icons/sprite.svg";

// console.log("logo :>> ", logo);

const Header = () => {
  const isOpen = false;

  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <UserInfoWrapperStyled isOpen={isOpen}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
        <button className="btn" type="button">
          <svg className="icon">
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
        <p className="cart-info">ProdNum: 0</p>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
