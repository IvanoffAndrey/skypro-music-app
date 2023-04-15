import * as S from "../../styles/AppStyles";
import NavBlock from "../../components/nav";
import BarBlock from "../../components/bar";
import Personal from "../../components/personal";
import * as Sidebar from "../../styles/SidebarBlockStyles";
import CenterBlock from "../../components/centerblock";
import { useParams } from "react-router-dom";
import { ThemeContext, themes } from "../../contexts/theme";
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
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  const params = useParams();
  const playlist = PLAYLISTS.find(
    (playlist) => playlist.id === Number(params.id)
  );

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBlock />
            <CenterBlock title={playlist.title} />
            <Sidebar.SidebarBlock style={currentTheme === themes.dark ? {background:'#181818'} : {background: '#f5f5f5'}}>
              <Personal />
            </Sidebar.SidebarBlock>
          </S.Main>
          <BarBlock />
        </S.Container>
      </S.Wrapper>
    </ThemeContext.Provider>
  );
}
