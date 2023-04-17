import iconWatch from "../assets/img/icon/watch.svg";
import * as S from "../styles/TitleModuleStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function TitleModule() {
  const { theme } = useContext(ThemeContext);

  return (
    <S.ContentTitle>
      <S.Col01 textColor={theme.titleColor }>Трек</S.Col01>
      <S.Col02 textColor={theme.titleColor }>ИСПОЛНИТЕЛЬ</S.Col02>
      <S.Col03 textColor={theme.titleColor }>АЛЬБОМ</S.Col03>
      <S.Col04>
        <S.TitleImg src={iconWatch} alt="watch" />
      </S.Col04>
    </S.ContentTitle>
  );
}

export default TitleModule;
