import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 45px;
  background-color: greenyellow;
`;

export const LogoStyled = styled.a`
  text-decoration: none;

  .logo {
    width: 50px;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin-left: 200px;
  margin-right: 100px;
`;

export const NavLinkStyled = styled(NavLink).attrs((props) => ({
  style: ({ isActive }) => ({
    color: isActive ? "red" : "blue",
  }),
}))`
  padding: 8px 15px;
  border: 1px solid red;
  border-radius: 3px;
  text-decoration: none;
  font-size: 22px;
`;

export const UserInfoWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;

  .btn {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    ${(props) =>
      props.isOpen ? "background-color: red" : "background-color: grey"}
  }

  .btn:hover {
    cursor: pointer;
  }
  .btn:active {
    transform: scale(0.95);
  }

  .icon {
    width: 25px;
    height: 25px;
  }
`;

const UserInfoStyled = styled.span`
  color: ${(props) => (props.isRed ? "red" : "blue")};
`;

export const UserNameStyled = styled(UserInfoStyled)`
  margin-right: 50px;
  font-size: 20px;
  border-radius: 50%;
`;

export const UserEmailStyled = styled(UserInfoStyled)`
  font-size: 16px;
`;

export const BtnLogout = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 18px;
  background: white;
  border: none;
  border-radius: 3px;
`;
