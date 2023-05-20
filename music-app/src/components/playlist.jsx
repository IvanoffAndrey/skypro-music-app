import * as S from "../styles/PlaylistStyles";
import iconNote from "../assets/img/icon/note.svg";
import btnLike from "../assets/img/icon/like.svg";
import { ThemeContext } from "../contexts/ThemeContext";
import React, { useContext } from "react";
import { useGetTracksQuery } from "../redux";
const { useEffect, useState } = React;

function Playlist() {
  const { theme } = useContext(ThemeContext);
  const [skeleton, setSkeleton] = useState(true);
  const { data = [] } = useGetTracksQuery();

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 5000);
  });

  return (
    <S.PlaylistContent>
      {data.map((item) =>
        skeleton ? (
          <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
        ) : (
          <S.PlaylistItem key={item.id}>
            <S.PlaylistTrack>
              <S.TrackTitle>
                <S.TrackTitleImg backgroundColor={theme.trackTitleBackground}>
                  <S.TrackTitleSvg
                    src={item.logo === null ? iconNote : item.logo}
                    alt="music"
                  />
                </S.TrackTitleImg>
                <S.TrackTitleText>
                  <S.TrackTitleLink href="http://" textColor={theme.color}>
                    {item.name} <S.TrackTitleSpan></S.TrackTitleSpan>
                  </S.TrackTitleLink>
                </S.TrackTitleText>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="http://" textColor={theme.color}>
                  {item.author}
                </S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="http://" textColor={theme.titleColor}>
                  {item.album}
                </S.TrackAlbumLink>
              </S.TrackAlbum>
              <S.TrackTime>
                <S.TrackTimeImg src={btnLike} alt="like" />
                <S.TrackTimeText textColor={theme.titleColor}>
                  {Math.floor(item.duration_in_seconds / 60) +
                    ":" +
                    (item.duration_in_seconds % 60)}
                </S.TrackTimeText>
              </S.TrackTime>
            </S.PlaylistTrack>
          </S.PlaylistItem>
        )
      )}
    </S.PlaylistContent>
  );
}

export default Playlist;
