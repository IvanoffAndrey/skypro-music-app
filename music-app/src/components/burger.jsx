import Menu from "./nav-menu";
import React from "react";
import * as S from "../styles/BurgerStyles";
const { useState } = React;

function Burger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <React.Fragment>
      <S.BurgerNav onClick={toggleVisibility}>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
        <S.BurgerLine></S.BurgerLine>
      </S.BurgerNav>
      <Menu visible={visible} />
    </React.Fragment>
  );
}

export default Burger;
