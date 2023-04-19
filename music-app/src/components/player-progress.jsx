import * as S from "../styles/PlayerProgressStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const { useRef } = React;

function PlayerProgress(props) {
  const { theme } = useContext(ThemeContext);
  const positionRef = useRef(null);

  const handlePosition = (e) => {
    props.updateTime(
      (e.pageX / document.documentElement.scrollWidth) * props.duration
    );
  };

  return (
    <S.PlayerProgress
      onClick={handlePosition}
      ref={positionRef}
      backgroundColor={ theme.playerProgressColor }
    >
      <div style={props.style}></div>
    </S.PlayerProgress>
  );
}

export default PlayerProgress;
