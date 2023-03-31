import styled from "styled-components";

const LoginWrapper = styled.div`
  background: #181818;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginWindow = styled.div`
  width: 366px;
  height: 439px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  padding-top: 30px;
  align-items: center;
  flex-direction: column;
`;

const LoginInput = styled.input`
  width: 278.5px;
  border: none;
  border-bottom: 1px solid #d0cece;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  color: #181818;
  margin-bottom: 38px;
  &::placeholder {
    color: #d0cece;
  }
`;

const LoginButton = styled.button`
  width: 278px;
  height: 52px;
  background: #580ea2;
  border-radius: 6px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
`;

const RegButton = styled(LoginButton)`
  background: #ffffff;
  color: #000000;
  margin-top: 20px;
  border: 1px solid #D0CECE;
`;

export { LoginWrapper, LoginWindow, LoginInput, LoginButton, RegButton };
