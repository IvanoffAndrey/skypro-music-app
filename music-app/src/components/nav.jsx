import Logo from "./logo";
import logo from "../assets/img/logo.png";
import Burger from "./burger";
import * as S from "../styles/NavBlockStyles";

function NavBlock() {
  return (
    <S.NavBlock>
      <Logo logo={ logo } />
      <Burger />
    </S.NavBlock>
  );
}

export default NavBlock;
