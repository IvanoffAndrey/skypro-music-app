import btnPrev from "./assets/img/icon/prev.svg";
import btnPlay from "./assets/img/icon/play.svg";
import btnNext from "./assets/img/icon/next.svg";
import btnRepeat from "./assets/img/icon/repeat.svg";
import btnShuffle from "./assets/img/icon/shuffle.svg";
import * as S from "./styles/PlayerControlsStyles";

function PlayerControls() {
  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerImgPrev src={btnPrev} alt="prev" />
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <S.PlayerImgPlay src={btnPlay} alt="play" />
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerImgPlay src={btnNext} alt="next" />
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <S.PlayerImgRepeat src={btnRepeat} alt="repeat" />
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <S.PlayerImgShuffle src={btnShuffle} alt="shuffle" />
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}

export default PlayerControls;
