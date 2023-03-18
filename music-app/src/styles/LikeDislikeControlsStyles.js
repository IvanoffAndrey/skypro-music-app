import styled from "styled-components";

const LikeDislikeControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;
`;

const LikeButton = styled.div`
  padding: 5px;
  &:hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
  &:active svg {
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
  }
  &:active {
    fill: #696969;
    stroke: #ffffff;
    cursor: pointer;
  }
`;
const DislikeButton = styled(LikeButton)`
  margin-left: 28.5px;
`;

const LikeDislikeImg = styled.img`
  width: 14px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

export { LikeDislikeControls, LikeButton, LikeDislikeImg, DislikeButton };
