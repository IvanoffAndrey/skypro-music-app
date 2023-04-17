import Personal from "./personal";
import SidebarMenu from "./sidebar-menu";
import * as S from "../styles/SidebarBlockStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function SidebarBlock(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <S.SidebarBlock backgroundColor={ theme.sidebarblockBackground }>
      <Personal />
      { props.menuVisible && <SidebarMenu />}
    </S.SidebarBlock>
  );
}

export default SidebarBlock;
