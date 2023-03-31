import iconVolume from "../assets/img/icon/volume.svg";
import * as S from "../styles/VolumeControlsStyles";

function VolumeControls() {
  return (
    <S.VolumeControls>
      <S.VolumeContent>
        <S.VolumeImgContainer>
          <S.VolumeImg src={iconVolume} alt="volume" />
        </S.VolumeImgContainer>
      </S.VolumeContent>
      <S.VolumeProgress>
        <S.VolumeProgressLine type="range" name="range" />
      </S.VolumeProgress>
    </S.VolumeControls>
  );
}

export default VolumeControls;
