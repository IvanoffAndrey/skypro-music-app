import SearchModule from "./search";
import FilterModule from "./filter-module";
import TitleModule from "./title";
import Playlist from "./playlist";
import * as S from "../styles/CenterBlockStyles";
import { useThemeContext } from "../contexts/theme";

function CenterBlock(props) {
  const { theme } = useThemeContext();

  return (
    <S.CenterBlock style={{ background: theme.centerblockBackground }}>
      <SearchModule />
      <S.CenterBlockH2 style={{ color: theme.color }}>{props.title}</S.CenterBlockH2>
      <FilterModule />
      <S.CenterBlockContent>
        <TitleModule />
        <Playlist />
      </S.CenterBlockContent>
    </S.CenterBlock>
  );
}

export default CenterBlock;
