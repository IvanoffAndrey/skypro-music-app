import SearchModule from "./search";
import FilterModule from "./filter-module";
import TitleModule from "./title";
import Playlist from "./playlist";
import * as S from "../styles/CenterBlockStyles";

function CenterBlock(props) {
  return (
    <S.CenterBlock>
      <SearchModule />
      <S.CenterBlockH2>{props.title}</S.CenterBlockH2>
      <FilterModule />
      <S.CenterBlockContent>
        <TitleModule />
        <Playlist />
      </S.CenterBlockContent>
    </S.CenterBlock>
  );
}

export default CenterBlock;
