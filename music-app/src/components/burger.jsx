import Menu from "./nav-menu";
import * as S from "../styles/BurgerStyles";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Burger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const { theme } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <S.BurgerNav onClick={toggleVisibility}>
        <S.BurgerLine backgroundColor={ theme.color }></S.BurgerLine>
        <S.BurgerLine backgroundColor={ theme.color }></S.BurgerLine>
        <S.BurgerLine backgroundColor={ theme.color }></S.BurgerLine>
      </S.BurgerNav>
      <Menu visible={visible} />
    </React.Fragment>
  );
}

export default Burger;
