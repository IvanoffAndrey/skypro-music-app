import * as S from "../styles/MenuStyles";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "./theme-switcher";
import { useThemeContext } from "../contexts/theme";

function Menu(props) {
  const visible = props.visible;
  const { theme } = useThemeContext();
  return (
    visible && (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <Link to="/"><S.MenuLink style={{ color: theme.color }}>Главное</S.MenuLink></Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://" style={{ color: theme.color }}>Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://" style={{ color: theme.color }}>Войти</S.MenuLink>
          </S.MenuItem>
          <ThemeSwitcher value={theme}></ThemeSwitcher>
        </S.MenuList>
      </S.MenuNav>
    )
  );
}

export default Menu;
