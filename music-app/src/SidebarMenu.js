import playlist1 from "./assets/img/playlist01.png";
import playlist2 from "./assets/img/playlist02.png";
import playlist3 from "./assets/img/playlist03.png";
import SidebarItem from "./SidebarItem";
import * as S from "./styles/SidebarMenuStyles";

function SidebarMenu() {
    return (
      <S.SidebarMenu>
        <S.SidebarList>
          <SidebarItem src={playlist1}/>
          <SidebarItem src={playlist2}/>
          <SidebarItem src={playlist3}/>
        </S.SidebarList>
      </S.SidebarMenu>
    );
  }

  export default SidebarMenu;