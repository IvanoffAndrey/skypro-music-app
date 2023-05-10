import * as S from "../../styles/login";
import logo from "../../assets/img/login-logo.svg";
import Logo from "../../components/logo";
import React from "react";
import { Link } from "react-router-dom";
import { useRegUserMutation, useLogUserMutation } from "../../redux";
const { useState, useEffect } = React;

export function Login() {
  const [visible, setVisability] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [user, setUser] = useState(null);
  const [regUser] = useRegUserMutation();
  const [logUser, { isSuccess, data }] = useLogUserMutation();
  const openRegWindow = () => {
    setVisability(!visible);
  };

  const handleRegUser = async () => {
    if (login && email && password) {
      await regUser({
        username: login,
        email: email,
        password: password,
      }).unwrap();
      setLogin("");
      setEmail("");
      setPassword("");
      setVisability(!visible);
    }
  };

  const handleLogUser = async () => {
    if (email && password) {
      await logUser({
        email: email,
        password: password,
      }).unwrap();
      console.log(email, password);
      setEmail("");
      setPassword("");
    }
  };


  // if (isError) console.log("Ошибка регистрации");

  return (
    <S.LoginWrapper>
      <S.LoginWindow>
        <Logo logo={logo} />
        {visible && (
          <S.LoginInput
            placeholder="Логин"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        )}
        <S.LoginInput
          placeholder="E-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <S.LoginInput
          placeholder="Пароль"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {!visible && (
          <React.Fragment>
            <Link to="/">
              <S.LoginButton onClick={handleLogUser}>Войти</S.LoginButton>
            </Link>

            <S.RegButton onClick={openRegWindow}>
              Зарегистрироваться
            </S.RegButton>
          </React.Fragment>
        )}
        {visible && (
          <S.LoginButton onClick={handleRegUser}>
            Зарегистрироваться
          </S.LoginButton>
        )}
      </S.LoginWindow>
    </S.LoginWrapper>
  );
}
