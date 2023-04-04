import btnPrev from "../assets/img/icon/prev.svg";
import btnPlay from "../assets/img/icon/play.svg";
import btnPause from "../assets/img/icon/pause.svg";
import btnNext from "../assets/img/icon/next.svg";
import btnRepeat from "../assets/img/icon/repeat.svg";
import btnShuffle from "../assets/img/icon/shuffle.svg";
import * as S from "../styles/PlayerControlsStyles";
import React from "react";
const { useRef, useState, useEffect } = React;

function PlayerControls(props) {
  const playerRef = useRef(null);
  const [play, setPlay] = useState(true);
  const [progress, setProgress] = useState("0");
  const handlePlay = () => {
    setPlay(!play);
    play ? playerRef.current.play() : playerRef.current.pause();
  };

  const handleProgress = () => {
    setProgress(
      //Math.ceil(
        (playerRef.current.currentTime * 100) / playerRef.current.duration
      //)
    );
    props.updateProg(progress, playerRef.current.duration);
  };

  useEffect(() => {
    playerRef.current.currentTime = props.newTime;
  }, [props.newTime]);

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev>
        <S.PlayerImgPrev src={btnPrev} alt="prev" />
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay>
        <S.PlayerImgPlay
          src={play ? btnPlay : btnPause}
          alt="play"
          onClick={handlePlay}
        />
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext>
        <S.PlayerImgNext src={btnNext} alt="next" />
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
