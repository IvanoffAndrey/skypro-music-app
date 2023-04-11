import styled from "styled-components";

const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

const PlayerButton = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const PlayerBtnPrev = styled(PlayerButton)`
  margin-right: 23px;
`;

const PlayerImgPrev = styled.img`
  width: 15px;
  height: 14px;
`;

const PlayerBtnPlay = styled(PlayerButton)`
  margin-right: 23px;
`;

const PlayerImgPlay = styled.img`
  width: 22px;
  height: 20px;
`;

const PlayerBtnNext = styled(PlayerButton)`
  margin-right: 28px;
  fill: #a53939;
`;

const PlayerImgNext = styled.img`
  width: 15px;
  height: 14px;
`;

const PlayerBtnRepeat = styled(PlayerButton)`
  margin-right: 24px;
`;

const PlayerImgRepeat = styled.img`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

const PlayerBtnShuffle = styled(PlayerButton)``;

const PlayerImgShuffle = styled.img`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`;

const Player = styled.audio`
  display: none;
`;

export {
  PlayerControls,
  PlayerBtnPrev,
  PlayerImgPrev,
  PlayerBtnPlay,
  PlayerImgPlay,
  PlayerBtnNext,
  PlayerImgNext,
  PlayerBtnRepeat,
  PlayerImgRepeat,
  PlayerBtnShuffle,
  PlayerImgShuffle,
  Player,
};
