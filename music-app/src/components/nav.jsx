import Logo from "./logo";
import logoLight from "../assets/img/logo.png";
import logoDark from "../assets/img/icon/logo-light.svg";
import Burger from "./burger";
import * as S from "../styles/NavBlockStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function NavBlock() {
  const { theme } = useContext(ThemeContext);

  return (
    <S.NavBlock backgroundColor={ theme.menuBackground }>
      <Logo logo={ theme.button === "light" ? logoDark : logoLight } />
      <Burger />
    </S.NavBlock>
  );
}

export default NavBlock;
