import logo from "./assets/img/logo.png";
import * as S from "./styles/LogoStyles";

function Logo() {
  return (
    <S.LogoNav>
      <S.LogoImg src={logo} alt="logo" />
    </S.LogoNav>
  );
}

export default Logo;
