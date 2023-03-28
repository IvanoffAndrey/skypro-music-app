import Personal from "./personal";
import SidebarMenu from "./sidebar-menu";
import * as S from "../styles/SidebarBlockStyles";

function SidebarBlock() {
  return (
    <S.SidebarBlock>
      <Personal />
      <SidebarMenu />
    </S.SidebarBlock>
  );
}

export default SidebarBlock;
