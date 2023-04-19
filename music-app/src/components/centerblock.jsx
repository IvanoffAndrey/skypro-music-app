import SearchModule from "./search";
import FilterModule from "./filter-module";
import TitleModule from "./title";
import Playlist from "./playlist";
import * as S from "../styles/CenterBlockStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function CenterBlock(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <S.CenterBlock backgroundColor={ theme.centerblockBackground }>
      <SearchModule />
      <S.CenterBlockH2 textColor={ theme.color }>{props.title}</S.CenterBlockH2>
      <FilterModule />
      <S.CenterBlockContent>
        <TitleModule />
        <Playlist />
      </S.CenterBlockContent>
    </S.CenterBlock>
  );
}

export default CenterBlock;
