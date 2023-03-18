import btnLike from "./assets/img/icon/like.svg";
import btnDislike from "./assets/img/icon/dislike.svg";
import * as S from "./styles/LikeDislikeControlsStyles";

function LikeDislikeControls() {
  return (
    <S.LikeDislikeControls>
      <S.LikeButton>
        <S.LikeDislikeImg src={btnLike} alt="like" />
      </S.LikeButton>
      <S.DislikeButton>
        <S.LikeDislikeImg src={btnDislike} alt="dislike" />
      </S.DislikeButton>
    </S.LikeDislikeControls>
  );
}

export default LikeDislikeControls;
