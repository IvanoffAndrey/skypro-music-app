import playlist1 from "../assets/img/playlist01.png";
import playlist2 from "../assets/img/playlist02.png";
import playlist3 from "../assets/img/playlist03.png";
import SidebarItem from "./sidebar-Item";
import * as S from "../styles/SidebarMenuStyles";
import { Link } from "react-router-dom";

function SidebarMenu() {
  return (
    <S.SidebarMenu>
      <S.SidebarList>
        <Link to={`playlist/1`}><SidebarItem src={playlist1} /></Link>
        <Link to={`playlist/2`}><SidebarItem src={playlist2} /></Link>
        <Link to={`playlist/3`}><SidebarItem src={playlist3} /></Link>
      </S.SidebarList>
    </S.SidebarMenu>
  );
}

export default SidebarMenu;
