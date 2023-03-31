import * as S from "../styles/PlaylistStyles";
import iconNote from "../assets/img/icon/note.svg";
import btnLike from "../assets/img/icon/like.svg";
import React from "react";
const { useEffect, useState } = React;

function Playlist() {
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Guilt <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Nero</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                Welcome Reality
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>4:44</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Elektro <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Dynoro, Outwork, Mr. Gee
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Elektro</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>2:22</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  I’m Fire <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Ali Bakgor</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">I’m Fire</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>2:22</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Non Stop <S.TrackTitleSpan>(Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Стоункат, Psychopath
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Non Stop</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>4:12</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Run Run <S.TrackTitleSpan>(feat. AR/CO)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Jaded, Will Clarke, AR/CO
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Run Run</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>2:54</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Eyes on Fire{" "}
                  <S.TrackTitleSpan>(Zeds Dead Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                Blue Foundation, Zeds Dead
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Eyes on Fire</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>5:20</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Mucho Bien{" "}
                  <S.TrackTitleSpan>(Hi Profile Remix)</S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">
                HYBIT, Mr. Black, Offer Nissim, Hi Profile
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Mucho Bien</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>3:41</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Knives n Cherries
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">minthaze</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">Captivating</S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>1:48</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Morena
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Tom Boxer</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                Soundz Made in Romania
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>1:48</S.TrackTimeText>
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
              <S.TrackTitleImg>
                <S.TrackTitleSvg src={iconNote} alt="music" />
              </S.TrackTitleImg>
              <S.TrackTitleText>
                <S.TrackTitleLink href="http://">
                  Morena
                  <S.TrackTitleSpan></S.TrackTitleSpan>
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href="http://">Tom Boxer</S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href="http://">
                Soundz Made in Romania
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <S.TrackTime>
              <S.TrackTimeImg src={btnLike} alt="like" />
              <S.TrackTimeText>1:48</S.TrackTimeText>
            </S.TrackTime>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      )}
    </S.PlaylistContent>
  );
}

export default Playlist;
