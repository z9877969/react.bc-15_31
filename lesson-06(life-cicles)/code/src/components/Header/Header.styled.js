import styled from "styled-components";

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

export const UserInfoWrapperStyled = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  padding: 5px 0;

  /* .btn {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    ${(props) =>
    props.isOpen ? "background-color: red" : "background-color: grey"}
  } */

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
  text-align: 1.2;
  color: ${(props) => (props.isRed ? "red" : "blue")};
`;

export const UserNameStyled = styled(UserInfoStyled)`
  margin-right: 40px;
  font-size: 20px;
  border-radius: 50%;
`;

export const UserEmailStyled = styled(UserInfoStyled)`
  font-size: 16px;
`;
