import PlayerProgress from "./player-progress";
import PlayerControls from "./player-controls";
import TrackPlayControls from "./track-play-controls";
import LikeDislikeControls from "./like-dislike-controls";
import VolumeControls from "./volume-controls";
import * as S from "../styles/BarBlockStyles";

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
