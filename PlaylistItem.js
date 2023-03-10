import React from "react";
import iconNote from "./img/icon/note.svg";
import btnLike from "./img/icon/like.svg";

class Playlist extends React.Component {
  render() {
    const musicContent = this.props.data.map(function (item) {
      return (
        <div className="playlist__item" key={item.id}>
          <div className="playlist__track track">
            <div className="track__title">
              <div className="track__title-image">
                <img
                  className="track__title-svg"
                  src={item.logo != null ? item.logo : iconNote}
                  alt="note"
                />
              </div>
              <div className="track__title-text">
                <a className="track__title-link" href="http://">
                  {item.name} <span className="track__title-span"></span>
                </a>
              </div>
            </div>
            <div className="track__author">
              <a className="track__author-link" href="http://">
                {item.author}
              </a>
            </div>
            <div className="track__album">
              <a className="track__album-link" href="http://">
                {item.album}
              </a>
            </div>
            <div className="track__time">
              {<img className="track__time-svg" src={btnLike} alt="like" />}
              <span className="track__time-text">
                {Math.floor(item.duration_in_seconds / 60) + ':' + item.duration_in_seconds % 60}
              </span>
            </div>
          </div>
        </div>
      );
    });
    return <div className="content__playlist playlist">{musicContent}</div>;
  }
}

export default Playlist;
