import * as S from "../../styles/AppStyles";
import NavBlock from "../../components/nav";
import SidebarBlock from "../../components/sidebar";
import BarBlock from "../../components/bar";
import CenterBlock from "../../components/centerblock";
import ThemeProvider from "../../contexts/ThemeProvider";

export function Main() {

  return (
    <ThemeProvider>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBlock />
            <CenterBlock title={"Треки"} />
            <SidebarBlock menuVisible={true}/>
          </S.Main>
          <BarBlock />
        </S.Container>
      </S.Wrapper>
    </ThemeProvider>
  );
}
