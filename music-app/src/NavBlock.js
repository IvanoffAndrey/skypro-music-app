import Logo from "./Logo";
import Burger from "./Burger";
import * as S from "./styles/NavBlockStyles";

function NavBlock() {
  return (
    <S.NavBlock>
      <Logo />
      <Burger />
    </S.NavBlock>
  );
}

export default NavBlock;
