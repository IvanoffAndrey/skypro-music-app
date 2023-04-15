import Menu from "./nav-menu";
import React from "react";
import * as S from "../styles/BurgerStyles";
import { useThemeContext } from "../contexts/theme";
const { useState } = React;

function Burger() {
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);
  const { theme } = useThemeContext();

  return (
    <React.Fragment>
      <S.BurgerNav onClick={toggleVisibility}>
        <S.BurgerLine style={{ background: theme.color }}></S.BurgerLine>
        <S.BurgerLine style={{ background: theme.color }}></S.BurgerLine>
        <S.BurgerLine style={{ background: theme.color }}></S.BurgerLine>
      </S.BurgerNav>
      <Menu visible={visible} />
    </React.Fragment>
  );
}

export default Burger;
