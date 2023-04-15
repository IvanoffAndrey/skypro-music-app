import * as S from "../styles/PersonalStyles";
import { useThemeContext } from "../contexts/theme";

function Personal() {
  const { theme } = useThemeContext();

  return (
    <S.Personal>
      <S.PersonalName style={{ color: theme.color }}>Andrey.Ivanov</S.PersonalName>
      <S.PersonalAvatar></S.PersonalAvatar>
    </S.Personal>
  );
}

export default Personal;
