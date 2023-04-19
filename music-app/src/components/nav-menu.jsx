import * as S from "../styles/MenuStyles";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./theme-switcher";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Menu(props) {
  const visible = props.visible;
  const { theme } = useContext(ThemeContext);

  return (
    visible && (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <Link to="/"><S.MenuLink textColor={ theme.color }>Главное</S.MenuLink></Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://" textColor={ theme.color }>Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://" textColor={ theme.color }>Войти</S.MenuLink>
          </S.MenuItem>
          <ThemeSwitcher></ThemeSwitcher>
        </S.MenuList>
      </S.MenuNav>
    )
  );
}

export default Menu;
