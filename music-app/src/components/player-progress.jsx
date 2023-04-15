import * as S from "../styles/PlayerProgressStyles";
import React from "react";
import { useThemeContext } from "../contexts/theme";
const { useRef } = React;

function PlayerProgress(props) {
  const { theme } = useThemeContext();
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
      style={{ background: theme.playerProgressColor }}
    >
      <div style={props.style}></div>
    </S.PlayerProgress>
  );
}

export default PlayerProgress;
