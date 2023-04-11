import * as S from "../styles/PlayerProgressStyles";
import React from "react";
const { useRef } = React;

function PlayerProgress(props) {
  const positionRef = useRef(null);

  const handlePosition = (e) => {
    props.updateTime((e.pageX/document.documentElement.scrollWidth)*props.duration);
  }
  
  return <S.PlayerProgress  onClick={handlePosition} ref={positionRef} >
    <div style={props.style}></div>
  </S.PlayerProgress>;
}

export default PlayerProgress;
