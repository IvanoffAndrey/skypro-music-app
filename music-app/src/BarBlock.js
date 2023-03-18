import PlayerProgress from "./PlayerProgress";
import PlayerControls from "./PlayerControls";
import TrackPlayControls from "./TrackPlayControls";
import LikeDislikeControls from "./LikeDislikeControls";
import VolumeControls from "./VolumeControls";
import * as S from "./styles/BarBlockStyles";

function BarBlock() {
  return (
    <S.Bar>
      <S.BarContent>
        <PlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <PlayerControls />
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
