import iconSearchDark from "../assets/img/icon/search-dark.svg";
import iconSearchLight from "../assets/img/icon/search-light.svg";
import * as S from "../styles/SearchModuleStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function SearchModule() {
  const { theme } = useContext(ThemeContext);

  return (
    <S.SearchModule>
      <S.SearchModuleImg src={theme.button === "light" ? iconSearchLight : iconSearchDark} alt="search" />
      <S.SearchModuleText
        type="search"
        placeholder="Поиск"
        name="search"
        placeholderColor = { theme.color }
      ></S.SearchModuleText>
    </S.SearchModule>
  );
}

export default SearchModule;
