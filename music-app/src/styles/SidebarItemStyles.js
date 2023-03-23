import styled from "styled-components";

const SidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`;

const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`;

const SidebarSkeletonImg = styled.div`
  width: 250px;
  height: 150px;
  background: #313131;
`;

export { SidebarItem, SidebarLink, SidebarImg, SidebarSkeletonImg };
