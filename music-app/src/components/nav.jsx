import Logo from "./logo";
import logoLight from "../assets/img/logo.png";
import logoDark from "../assets/img/icon/logo-light.svg";
import Burger from "./burger";
import * as S from "../styles/NavBlockStyles";
import { useThemeContext } from "../contexts/theme";

function NavBlock() {
  const { theme } = useThemeContext();
  return (
    <S.NavBlock style={{ background: theme.menuBackground }}>
      <Logo logo={ theme.button === "light" ? logoDark : logoLight } />
      <Burger />
    </S.NavBlock>
  );
}

export default NavBlock;
