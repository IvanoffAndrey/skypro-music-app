import iconNote from "./assets/img/icon/note.svg";
import * as S from "./styles/TrackPlayControlsStyles";

function TrackPlayControls() {
  return (
    <S.TrackPlayControls>
      <S.TrackPlayContain>
        <S.TrackPlayItem>
          <S.TrackPlayImg src={iconNote} alt="music" />
        </S.TrackPlayItem>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://">Ты та...</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://">Баста</S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
    </S.TrackPlayControls>
  );
}

export default TrackPlayControls;
