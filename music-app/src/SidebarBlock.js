import Personal from "./Personal";
import SidebarMenu from "./SidebarMenu";
import * as S from "./styles/SidebarBlockStyles";

function SidebarBlock() {
  return (
    <S.SidebarBlock>
      <Personal />
      <SidebarMenu />
    </S.SidebarBlock>
  );
}

export default SidebarBlock;
