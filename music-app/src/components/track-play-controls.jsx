import iconNote from "../assets/img/icon/note.svg";
import * as S from "../styles/TrackPlayControlsStyles";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function TrackPlayControls() {
  const { theme } = useContext(ThemeContext);

  return (
    <S.TrackPlayControls>
      <S.TrackPlayContain>
        <S.TrackPlayItem backgroundColor={ theme.trackTitleBackground }>
          <S.TrackPlayImg src={iconNote} alt="music" />
        </S.TrackPlayItem>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://" textColor={ theme.color }>Ты та...</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://" textColor={ theme.color }>Баста</S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
    </S.TrackPlayControls>
  );
}

export default TrackPlayControls;
