import iconWatch from "../assets/img/icon/watch.svg";
import * as S from "../styles/TitleModuleStyles";
import { useThemeContext } from "../contexts/theme";

function TitleModule() {
  const { theme } = useThemeContext();

  return (
    <S.ContentTitle>
      <S.Col01 style={{ color: theme.titleColor }}>Трек</S.Col01>
      <S.Col02 style={{ color: theme.titleColor }}>ИСПОЛНИТЕЛЬ</S.Col02>
      <S.Col03 style={{ color: theme.titleColor }}>АЛЬБОМ</S.Col03>
      <S.Col04>
        <S.TitleImg src={iconWatch} alt="watch" />
      </S.Col04>
    </S.ContentTitle>
  );
}

export default TitleModule;
