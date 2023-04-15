import styled from "styled-components";

const VolumeControls = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;
`;

const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;

const VolumeProgress = styled.div`
  width: 109px;
  display: flex;
  cursor: pointer;
`;

const VolumeProgressLine = styled.input`
  width: 109px;
  cursor: pointer;
`;

const VolumeImgContainer = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;
const VolumeImg = styled.img`
  width: 13px;
  height: 18px;
`;

export { VolumeControls, VolumeContent, VolumeProgress, VolumeProgressLine, VolumeImgContainer, VolumeImg };
