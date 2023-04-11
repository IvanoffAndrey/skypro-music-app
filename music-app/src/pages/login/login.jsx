import * as S from "../../styles/login";
import logo from "../../assets/img/login-logo.svg";
import Logo from "../../components/logo";
import React from "react";
import { Link } from "react-router-dom";
const { useState } = React;

export function Login() {
  const [visible, setVisability] = useState(false);
  const registration = () => {
    setVisability(!visible);
  };

  const [loginText, setLogin] = useState("");

  return (
    <S.LoginWrapper>
      <S.LoginWindow>
        <Logo logo={logo} />
        <S.LoginInput
          placeholder="Логин"
          value={loginText}
          onChange={(e) => {
            console.log(e);
            setLogin(e.target.value);
          }}
        />
        <S.LoginInput placeholder="Пароль" />
        {visible && <S.LoginInput placeholder="Повторите пароль" />}
        {!visible && (
          <React.Fragment>
            <Link to="/">
              <S.LoginButton>Войти</S.LoginButton>
            </Link>

            <S.RegButton onClick={registration}>Зарегистрироваться</S.RegButton>
          </React.Fragment>
        )}
        {visible && (
          <S.LoginButton onClick={registration}>
            Зарегистрироваться
          </S.LoginButton>
        )}
      </S.LoginWindow>
    </S.LoginWrapper>
  );
}
