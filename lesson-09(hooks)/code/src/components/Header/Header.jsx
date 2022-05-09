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
  return (
    <HeaderStyled>
      <LogoStyled href="#">
        <img src={logo} alt="Some logo" className="logo" />
      </LogoStyled>
      <UserInfoWrapperStyled isOpen={false}>
        <UserNameStyled isRed>User</UserNameStyled>
        <UserEmailStyled>user@mail.com</UserEmailStyled>
        <button onClick={null} className="btn" type="button">
          <svg className="icon">
            <use href={sprite + "#icon-cart"}></use>
          </svg>
        </button>
        <p className="cart-info">ProdNum: {productsNum}</p>
      </UserInfoWrapperStyled>
    </HeaderStyled>
  );
};

export default Header;
