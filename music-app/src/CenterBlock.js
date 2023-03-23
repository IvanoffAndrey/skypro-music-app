import SearchModule from "./SearchModule";
import FilterModule from "./FilterModule";
import TitleModule from "./TitleModule";
import Playlist from "./Playlist";
import * as S from "./styles/CenterBlockStyles";

function CenterBlock() {
  return (
    <S.CenterBlock>
      <SearchModule />
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <FilterModule />
      <S.CenterBlockContent>
        <TitleModule />
        <Playlist />
      </S.CenterBlockContent>
    </S.CenterBlock>
  );
}

export default CenterBlock;
