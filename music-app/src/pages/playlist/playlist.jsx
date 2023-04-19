import * as S from "../../styles/AppStyles";
import NavBlock from "../../components/nav";
import BarBlock from "../../components/bar";
import SidebarBlock from "../../components/sidebar";
import CenterBlock from "../../components/centerblock";
import { useParams } from "react-router-dom";
import ThemeProvider from "../../contexts/ThemeProvider";
import { useState } from "react";

const PLAYLISTS = [
  {
    id: 1,
    title: "Плейлист дня",
  },
  {
    id: 2,
    title: "100 танцевальных хитов",
  },
  {
    id: 3,
    title: "Инди-заряд",
  },
];

export function Playlist() {
  const params = useParams();
  const playlist = PLAYLISTS.find(
    (playlist) => playlist.id === Number(params.id)
  );
  return (
    <ThemeProvider>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBlock />
            <CenterBlock title={playlist.title} />
            <SidebarBlock menuVisible={false}/>
          </S.Main>
          <BarBlock />
        </S.Container>
      </S.Wrapper>
    </ThemeProvider>
  );
}
