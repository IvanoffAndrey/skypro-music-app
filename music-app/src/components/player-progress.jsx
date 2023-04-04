import * as S from "../styles/PlayerProgressStyles";
import React from "react";
const { useState, useRef } = React;

function PlayerProgress(props) {
  const positionRef = useRef(null);
  //const [newUserTime, setNewUserTime] = useState(0);
  const handlePosition = (e) => {
    //setNewUserTime((e.pageX/document.documentElement.scrollWidth)*props.duration);
    //props.updateTime(newUserTime);
    props.updateTime((e.pageX/document.documentElement.scrollWidth)*props.duration);
  }
  return <S.PlayerProgress  onClick={handlePosition} ref={positionRef} >
    <div style={props.style}></div>
  </S.PlayerProgress>;
}

export default PlayerProgress;
