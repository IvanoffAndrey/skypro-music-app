import btnPrevDark from "../assets/img/icon/prev-dark.svg";
import btnPrevLight from "../assets/img/icon/prev-light.svg";
import btnPlayDark from "../assets/img/icon/play-dark.svg";
import btnPlayLight from "../assets/img/icon/play-light.svg";
import btnPauseDark from "../assets/img/icon/pause-dark.svg";
import btnPauseLight from "../assets/img/icon/pause-light.svg";
import btnNextDark from "../assets/img/icon/next-dark.svg";
import btnNextLight from "../assets/img/icon/next-light.svg";
import btnRepeat from "../assets/img/icon/repeat.svg";
import btnShuffle from "../assets/img/icon/shuffle.svg";
import * as S from "../styles/PlayerControlsStyles";
import React from "react";
import { useThemeContext } from "../contexts/theme";
const { useRef, useState, useEffect } = React;

function PlayerControls(props) {
  const { theme } = useThemeContext();
  let btnPlay = theme.button === "light" ? btnPlayLight : btnPlayDark;
  let btnPause = theme.button === "light" ? btnPauseLight : btnPauseDark;
  const playerRef = useRef(null);
  const [play, setPlay] = useState(true);
  const [progress, setProgress] = useState("0");
  const handlePlay = () => {
    setPlay(!play);
    play ? playerRef.current.play() : playerRef.current.pause();
  };

  const handleProgress = () => {
    setProgress(
      (playerRef.current.currentTime * 100) / playerRef.current.duration
    );
    props.updateProg(progress, playerRef.current.duration);
  };

  useEffect(() => {
    playerRef.current.currentTime = props.newTime;
  }, [props.newTime]);

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerImgPrev src={theme.button === "light" ? btnPrevLight : btnPrevDark} alt="prev" />
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <S.PlayerImgPlay
          src={play ? btnPlay : btnPause}
          alt="play"
          onClick={handlePlay}
        />
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerImgNext src={theme.button === "light" ? btnNextLight : btnNextDark} alt="next" />
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat>
        <S.PlayerImgRepeat src={btnRepeat} alt="repeat" />
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle>
        <S.PlayerImgShuffle src={btnShuffle} alt="shuffle" />
      </S.PlayerBtnShuffle>
      <S.Player
        src="../song1.mp3"
        controls
        type="audio/mp3"
        ref={playerRef}
        onTimeUpdate={handleProgress}
      ></S.Player>
    </S.PlayerControls>
  );
}

export default PlayerControls;
