import * as S from "../styles/MenuStyles";
import { Link } from "react-router-dom";

function Menu(props) {
  const visible = props.visible;
  return (
    visible && (
      <S.MenuNav>
        <S.MenuList>
          <S.MenuItem>
            <Link to="/"><S.MenuLink>Главное</S.MenuLink></Link>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.MenuNav>
    )
  );
}

export default Menu;
