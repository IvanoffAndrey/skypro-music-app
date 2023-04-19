import * as S from "../styles/LogoStyles";

function Logo(props) {
  const logo = props.logo ;

  return (
    <S.LogoNav>
      <S.LogoImg src={logo} alt="logo" />
    </S.LogoNav>
  );
}

export default Logo;
