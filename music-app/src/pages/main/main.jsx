import * as S from "../../styles/AppStyles";
import NavBlock from "../../components/nav";
import SidebarBlock from "../../components/sidebar";
import BarBlock from "../../components/bar";
import CenterBlock from "../../components/centerblock";

export function Main() {
  return (
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
  );
}

 
