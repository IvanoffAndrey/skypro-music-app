import iconSearchDark from "../assets/img/icon/search-dark.svg";
import iconSearchLight from "../assets/img/icon/search-light.svg";
import * as S from "../styles/SearchModuleStyles";
import { useThemeContext } from "../contexts/theme";

function SearchModule() {
  const { theme } = useThemeContext();

  return (
    <S.SearchModule>
      <S.SearchModuleImg src={theme.button === "light" ? iconSearchLight : iconSearchDark} alt="search" />
      <S.SearchModuleText
        type="search"
        placeholder="Поиск"
        name="search"
        style={{ color: theme.color }}
      ></S.SearchModuleText>
    </S.SearchModule>
  );
}

export default SearchModule;
