import styled from "styled-components";

const SidebarItem = styled.div`
  width: 250px;
  height: 150px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
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

export { SidebarItem, SidebarImg, SidebarSkeletonImg };
