import iconVolumeDark from "../assets/img/icon/volume-dark.svg";
import iconVolumeLight from "../assets/img/icon/volume-light.svg";
import * as S from "../styles/VolumeControlsStyles";
import { useThemeContext } from "../contexts/theme";

function VolumeControls() {
  const { theme } = useThemeContext();
  return (
    <S.VolumeControls>
      <S.VolumeContent>
        <S.VolumeImgContainer>
          <S.VolumeImg
            src={theme.button === "light" ? iconVolumeLight : iconVolumeDark}
            alt="volume"
          />
        </S.VolumeImgContainer>
      </S.VolumeContent>
      <S.VolumeProgress>
        <S.VolumeProgressLine
          style={{ color: theme.volumeColor }}
          type="range"
          name="range"
        />
      </S.VolumeProgress>
    </S.VolumeControls>
  );
}

export default VolumeControls;
