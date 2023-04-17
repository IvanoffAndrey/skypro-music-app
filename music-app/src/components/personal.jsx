import * as S from "../styles/PersonalStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Personal() {
  const { theme } = useContext(ThemeContext);

  return (
    <S.Personal>
      <S.PersonalName textColor={ theme.color }>Andrey.Ivanov</S.PersonalName>
      <S.PersonalAvatar></S.PersonalAvatar>
    </S.Personal>
  );
}

export default Personal;
