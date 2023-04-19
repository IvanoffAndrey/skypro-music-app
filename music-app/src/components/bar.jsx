import PlayerProgress from "./player-progress";
import PlayerControls from "./player-controls";
import TrackPlayControls from "./track-play-controls";
import LikeDislikeControls from "./like-dislike-controls";
import VolumeControls from "./volume-controls";
import * as S from "../styles/BarBlockStyles";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


function BarBlock() {
  const [prog, setProg] = useState(0);
  const [duration, setDuration] = useState(0);
  const [time, setTime] = useState(0);
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: "#B672FF",
    width: prog,
    height: "100%",
    zIndex: "1",
  };

  const updateProg = (valueProg, valueDuration) => {
    setProg(valueProg + "%");
    setDuration(valueDuration);
  };

  const updateTime = (value) => {
    setTime(value);
  }

  return (
    <S.Bar backgroundColor={ theme.barBackground }>
      <S.BarContent>
        <PlayerProgress style={style} duration={duration} updateTime={updateTime} />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <PlayerControls updateProg={updateProg} newTime={time} />
          </S.BarPlayer>
          <TrackPlayControls />
          <LikeDislikeControls />
          <VolumeControls />
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  );
}

export default BarBlock;
