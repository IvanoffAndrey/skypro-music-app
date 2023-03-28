import iconSearch from "../assets/img/icon/search.svg";
import * as S from "../styles/SearchModuleStyles";

function SearchModule() {
  return (
    <S.SearchModule>
      <S.SearchModuleImg src={iconSearch} alt="search" />
      <S.SearchModuleText
        type="search"
        placeholder="Поиск"
        name="search"
      ></S.SearchModuleText>
    </S.SearchModule>
  );
}

export default SearchModule;
