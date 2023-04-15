import * as S from "../styles/PlaylistStyles";
import iconNote from "../assets/img/icon/note.svg";
import btnLike from "../assets/img/icon/like.svg";
import { useThemeContext } from "../contexts/theme";
import React from "react";
const { useEffect, useState } = React;

function Playlist() {
  const { theme } = useThemeContext();
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 5000);
  });

  return (
    <S.PlaylistContent>
      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>Nero</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>
                Welcome Reality
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>4:44</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Elektro <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>
                Dynoro, Outwork, Mr. Gee
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>Elektro</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>2:22</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>Ali Bakgor</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>I’m Fire</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>2:22</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Non Stop <S.TrackTitleSpan style={{ color: theme.titleColor }}>(Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>
                Стоункат, Psychopath
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>Non Stop</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>4:12</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Run Run <S.TrackTitleSpan style={{ color: theme.titleColor }}>(feat. AR/CO)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>
                Jaded, Will Clarke, AR/CO
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>Run Run</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>2:54</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Eyes on Fire{" "}
                  <S.TrackTitleSpan style={{ color: theme.titleColor }}>(Zeds Dead Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>
                Blue Foundation, Zeds Dead
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>Eyes on Fire</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>5:20</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Mucho Bien{" "}
                  <S.TrackTitleSpan style={{ color: theme.titleColor }}>(Hi Profile Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>Mucho Bien</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>3:41</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Morena
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>Tom Boxer</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>
                Soundz Made in Romania
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}

      {skeleton ? (
        <S.SkeletonPlaylistItem></S.SkeletonPlaylistItem>
      ) : (
        <S.PlaylistItem>
          <S.PlaylistTrack>
            <S.TrackTitle>
              <S.TrackTitleImg style={{ background: theme.trackTitleBackground }}>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://" style={{ color: theme.color }}>
                  Morena
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://" style={{ color: theme.color }}>Tom Boxer</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://" style={{ color: theme.titleColor }}>
                Soundz Made in Romania
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText style={{ color: theme.titleColor }}>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}
    </S.PlaylistContent>
  );
}

export default Playlist;
