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
  width: 500px;
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
    /* background-color: ${(props) => (props.isOpen ? "red" : "grey")}; */
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
  font-size: 20px;
  border-radius: 50%;
`;

export const UserEmailStyled = styled(UserInfoStyled)`
  font-size: 16px;
`;
