import Personal from "./personal";
import SidebarMenu from "./sidebar-menu";
import * as S from "../styles/SidebarBlockStyles";
import { useThemeContext } from "../contexts/theme";

function SidebarBlock() {
  const { theme } = useThemeContext();

  return (
    <S.SidebarBlock style={{ background: theme.sidebarblockBackground }}>
      <Personal />
      <SidebarMenu />
    </S.SidebarBlock>
  );
}

export default SidebarBlock;
