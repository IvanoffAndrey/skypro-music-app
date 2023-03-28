import * as S from "../styles/SidebarItemStyles";
import React from "react";
const { useEffect, useState } = React;

function SidebarItem(props) {
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 5000);
  });

  return (
    <S.SidebarItem>
      <S.SidebarLink href="#">
        {skeleton ? (
          <S.SidebarSkeletonImg></S.SidebarSkeletonImg>
        ) : (
          <S.SidebarImg src={props.src} alt="day's playlist" />
        )}
      </S.SidebarLink>
    </S.SidebarItem>
  );
}

export default SidebarItem;