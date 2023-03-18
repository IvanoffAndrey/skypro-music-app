import * as S from "./styles/AppStyles";
import NavBlock from "./NavBlock";
import SidebarBlock from "./SidebarBlock";
import BarBlock from "./BarBlock";
import CenterBlock from "./CenterBlock";
import { GlobalStyle } from "./styles/GlobalStyle";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <NavBlock />
            <CenterBlock />
            <SidebarBlock />
          </S.Main>
          <BarBlock />
        </S.Container>
      </S.Wrapper>
    </React.Fragment>
  );
}

export default App;
