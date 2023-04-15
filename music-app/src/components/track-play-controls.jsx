import iconNote from "../assets/img/icon/note.svg";
import * as S from "../styles/TrackPlayControlsStyles";
import { useThemeContext } from "../contexts/theme";

function TrackPlayControls() {
  const { theme } = useThemeContext();

  return (
    <S.TrackPlayControls>
      <S.TrackPlayContain>
        <S.TrackPlayItem style={{ background: theme.trackTitleBackground }}>
          <S.TrackPlayImg src={iconNote} alt="music" />
        </S.TrackPlayItem>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="http://" style={{ color: theme.color }}>Ты та...</S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="http://" style={{ color: theme.color }}>Баста</S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </S.TrackPlayContain>
    </S.TrackPlayControls>
  );
}

export default TrackPlayControls;
