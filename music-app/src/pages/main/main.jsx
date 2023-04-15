import * as S from "../../styles/AppStyles";
import NavBlock from "../../components/nav";
import SidebarBlock from "../../components/sidebar";
import BarBlock from "../../components/bar";
import CenterBlock from "../../components/centerblock";
import { ThemeContext, themes } from "../../contexts/theme";
import { useState } from "react";

export function Main() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBlock />
            <CenterBlock title={"Треки"} />
            <SidebarBlock />
          </S.Main>
          <BarBlock />
        </S.Container>
      </S.Wrapper>
    </ThemeContext.Provider>
  );
}
